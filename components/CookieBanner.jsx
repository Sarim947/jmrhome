"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
const [show, setShow] = useState(false);

useEffect(() => {
const consent = localStorage.getItem("cookie-consent");

```
if (!consent) {
  setShow(true);
}
```

}, []);

if (!show) return null;

return (
<div
style={{
position: "fixed",
bottom: "30px",
right: "30px",
width: "420px",
maxWidth: "calc(100vw - 40px)",
background: "#ffffff",
color: "#111827",
padding: "24px",
borderRadius: "18px",
boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
border: "1px solid #e5e7eb",
zIndex: 9999
}}
>
<h3
style={{
margin: "0 0 12px",
fontSize: "22px",
fontWeight: "600"
}}
>
We Value Your Privacy </h3>

```
  <p
    style={{
      margin: 0,
      lineHeight: "1.7",
      color: "#6b7280"
    }}
  >
    We use cookies to improve your experience and analyze website traffic.
  </p>

  <div
    style={{
      marginTop: "20px",
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px"
    }}
  >
    <button
      onClick={() => {
        localStorage.setItem("cookie-consent", "rejected");
        setShow(false);
      }}
      style={{
        background: "#ffffff",
        color: "#111827",
        border: "1px solid #d1d5db",
        padding: "12px 24px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "600"
      }}
    >
      Reject
    </button>

    <button
      onClick={() => {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted"
        });

        localStorage.setItem("cookie-consent", "accepted");
        setShow(false);
      }}
      style={{
        background: "#111827",
        color: "#ffffff",
        border: "none",
        padding: "12px 24px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "600"
      }}
    >
      Accept
    </button>
  </div>
</div>
```

);
}
