"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        background: "#111",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        zIndex: 9999
      }}
    >
      <p>
        We use cookies to improve your experience and analyze website traffic.
      </p>

      <button
        onClick={() => {
          localStorage.setItem("cookie-consent", "accepted");
          setShow(false);
        }}
      >
        Accept
      </button>

      <button
        onClick={() => {
          localStorage.setItem("cookie-consent", "rejected");
          setShow(false);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reject
      </button>
    </div>
  );
}
