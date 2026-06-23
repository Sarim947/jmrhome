const statusEl = document.querySelector("#status");
const toastEl = document.querySelector("#toast");
const collectionList = document.querySelector("#collection-list");
const editCollectionList = document.querySelector("#edit-collection-list");
const collectionMode = document.querySelector("#collection-mode");
let currentState = { collections: [] };

function showToast(message, isError = false) {
  toastEl.textContent = message;
  toastEl.classList.toggle("error", isError);
  toastEl.classList.add("show");
  window.setTimeout(() => toastEl.classList.remove("show"), 4200);
}

async function loadState() {
  const response = await fetch("/api/state");
  const state = await response.json();
  currentState = state;
  statusEl.textContent = `${state.collections.length} collections · ${state.dailyCount} daily · ${state.inspirationCount} inspiration`;
  const options = state.collections
    .map((item) => `<option value="${item.slug}">${item.title}</option>`)
    .join("");
  collectionList.innerHTML = options;
  editCollectionList.innerHTML = options;
  updateCollectionEditor();
}

function setBusy(form, busy) {
  form.querySelectorAll("button, input, select, textarea").forEach((element) => {
    element.disabled = busy;
  });
}

function validateRequiredFields(form) {
  const fields = Array.from(form.querySelectorAll("[required]")).filter((field) => !field.disabled);
  const missing = fields.find((field) => {
    if (field.type === "file") return !field.files?.length;
    return !String(field.value || "").trim();
  });

  if (!missing) return true;

  const label = missing.closest("label")?.childNodes?.[0]?.textContent?.trim() || missing.name || "Required field";
  showToast(`${label} is required.`, true);
  missing.focus?.();
  return false;
}

async function submitForm(form, endpoint) {
  if (!validateRequiredFields(form)) return;
  const body = new FormData(form);
  setBusy(form, true);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body
    });
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Admin server is using an old route. Stop it and run npm run admin again.");
    }
    if (!response.ok || !result.ok) throw new Error(result.error || "Save failed.");
    showToast(result.message || "Saved.");
    form.reset();
    form.querySelectorAll(".image-preview").forEach((element) => {
      element.innerHTML = "";
    });
    updateCollectionMode();
    await loadState();
  } catch (error) {
    showToast(error.message, true);
  } finally {
    setBusy(form, false);
  }
}

function updateCollectionEditor() {
  const collection = currentState.collections.find((item) => item.slug === editCollectionList.value);
  if (!collection) return;

  document.querySelector("#edit-collection-title").value = collection.title || "";
  if (collection.shortDesc !== undefined) {
    document.querySelector("#edit-collection-desc").value = collection.shortDesc || "";
  }
}

function updateCollectionMode() {
  const isNew = collectionMode.value === "new";
  document.querySelectorAll(".new-only").forEach((element) => element.classList.toggle("hidden", !isNew));
  document.querySelectorAll(".existing-only").forEach((element) => element.classList.toggle("hidden", isNew));
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function ratioLabel(width, height) {
  const divisor = gcd(width, height) || 1;
  return `${Math.round(width / divisor)}:${Math.round(height / divisor)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getCropBox(width, height, targetRatio, crop = {}) {
  const imageRatio = width / height;
  const zoom = Math.max(1, Math.min(Number.parseFloat(crop.zoom) || 1, 3));
  const x = Math.max(0, Math.min(Number.parseFloat(crop.x) || 50, 100));
  const y = Math.max(0, Math.min(Number.parseFloat(crop.y) || 50, 100));
  let widthPercent = 100;
  let heightPercent = 100;

  if (targetRatio && Math.abs(imageRatio - targetRatio) >= 0.01) {
    if (imageRatio > targetRatio) {
      widthPercent = (targetRatio / imageRatio) * 100;
    } else {
      heightPercent = (imageRatio / targetRatio) * 100;
    }
  }

  widthPercent /= zoom;
  heightPercent /= zoom;

  return {
    left: ((100 - widthPercent) * x) / 100,
    top: ((100 - heightPercent) * y) / 100,
    width: widthPercent,
    height: heightPercent
  };
}

function cropStyle(width, height, targetRatio, crop) {
  const box = getCropBox(width, height, targetRatio, crop);
  return `left:${box.left}%;top:${box.top}%;width:${box.width}%;height:${box.height}%;`;
}

function previewImage(file, container, targetRatio) {
  const image = new Image();
  const url = URL.createObjectURL(file);
  const inputName = container.dataset.inputName;

  image.onload = () => {
    const { naturalWidth, naturalHeight } = image;
    const crop = { x: 50, y: 50, zoom: 1 };
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="crop-card">
        <div class="crop-meta">${escapeHtml(file.name)} · ${naturalWidth}×${naturalHeight} · ${ratioLabel(naturalWidth, naturalHeight)}</div>
        <div class="crop-preview" style="aspect-ratio:${naturalWidth}/${naturalHeight}">
          <img src="${url}" alt="" />
          <div class="crop-window" style="${cropStyle(naturalWidth, naturalHeight, targetRatio, crop)}"></div>
        </div>
        <div class="crop-controls">
          <label>Move X<input type="range" min="0" max="100" value="50" data-crop-control="x" /></label>
          <label>Move Y<input type="range" min="0" max="100" value="50" data-crop-control="y" /></label>
          <label>Zoom<input type="range" min="1" max="3" step="0.01" value="1" data-crop-control="zoom" /></label>
        </div>
        <input type="hidden" name="${inputName}CropX" value="50" data-crop-field="x" />
        <input type="hidden" name="${inputName}CropY" value="50" data-crop-field="y" />
        <input type="hidden" name="${inputName}CropZoom" value="1" data-crop-field="zoom" />
      </div>`
    );

    const card = container.lastElementChild;
    const windowEl = card.querySelector(".crop-window");
    const controls = card.querySelectorAll("[data-crop-control]");
    const fields = card.querySelectorAll("[data-crop-field]");
    const update = () => {
      controls.forEach((control) => {
        crop[control.dataset.cropControl] = control.value;
      });
      fields.forEach((field) => {
        field.value = crop[field.dataset.cropField];
      });
      windowEl.setAttribute("style", cropStyle(naturalWidth, naturalHeight, targetRatio, crop));
    };
    controls.forEach((control) => control.addEventListener("input", update));
  };

  image.src = url;
}

function updateImagePreview(input) {
  const container = document.querySelector(`#${input.dataset.preview}`);
  if (!container) return;
  container.innerHTML = "";
  container.dataset.inputName = input.name;
  const targetRatio = Number.parseFloat(input.closest(".image-field")?.dataset.ratio || "1.333");
  Array.from(input.files || []).forEach((file) => previewImage(file, container, targetRatio));
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#panel-${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelectorAll('input[type="file"][data-preview]').forEach((input) => {
  input.addEventListener("change", () => updateImagePreview(input));
});

collectionMode.addEventListener("change", updateCollectionMode);
editCollectionList.addEventListener("change", updateCollectionEditor);
document.querySelector("#daily-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, "/api/daily");
});
document.querySelector("#collection-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, "/api/collection");
});
document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, "/api/product");
});
document.querySelector("#inspiration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(event.currentTarget, "/api/inspiration");
});

updateCollectionMode();
loadState().catch((error) => {
  statusEl.textContent = "Could not load data";
  showToast(error.message, true);
});
