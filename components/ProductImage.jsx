"use client";

import { useRef } from "react";
import styles from "./ProductImage.module.css";

export default function ProductImage({ alt, ...imageProps }) {
  const dialogRef = useRef(null);
  const previousOverflow = useRef("");

  function close() {
    dialogRef.current.close();
  }

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label={`View larger image: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => {
          previousOverflow.current = document.body.style.overflow;
          dialogRef.current.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <img {...imageProps} alt={alt} />
        <span className={styles.hint}>View larger ↗</span>
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={`Image preview: ${alt}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
        }}
      >
        <button type="button" className={styles.close} onClick={close} aria-label="Close image preview" autoFocus>
          ×
        </button>
        <img className={styles.fullImage} src={imageProps.src} alt={alt} />
      </dialog>
    </>
  );
}
