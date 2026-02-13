import { useState } from "react";

export default function DomainsPage() {
  const [domain, setDomain] = useState("");
  const [saved, setSaved] = useState("");

  function handleSave(event) {
    event.preventDefault();
    setSaved(domain.trim());
  }

  return (
    <div style={panelStyle}>
      <h1 style={{ marginTop: 0 }}>Domains</h1>
      <p style={mutedStyle}>Configure your custom domain mapping.</p>
      <form onSubmit={handleSave} style={{ display: "grid", gap: 10, maxWidth: 560 }}>
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="app.example.com"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Save Domain</button>
      </form>
      {saved ? <div style={{ marginTop: 10, color: "#91f2aa" }}>Saved domain: {saved}</div> : null}
    </div>
  );
}

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 14,
  minHeight: 320,
};

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 8,
  background: "rgba(0,0,0,0.3)",
  color: "#fff",
  padding: "10px 12px",
};

const buttonStyle = {
  width: "fit-content",
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 600,
};

const mutedStyle = { color: "rgba(255,255,255,0.72)", marginTop: 0 };
