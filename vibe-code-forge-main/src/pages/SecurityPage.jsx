import { useState } from "react";

export default function SecurityPage() {
  const [state, setState] = useState({
    enforce2fa: true,
    ipAllowlist: false,
    auditTrail: true,
    apiKeyRotationDays: "30",
  });

  return (
    <div style={panelStyle}>
      <h1 style={{ marginTop: 0 }}>Security</h1>
      <p style={mutedStyle}>Security controls and policy placeholders.</p>
      <div style={{ display: "grid", gap: 10, maxWidth: 620 }}>
        <ToggleRow label="Enforce 2FA" checked={state.enforce2fa} onChange={(checked) => setState({ ...state, enforce2fa: checked })} />
        <ToggleRow label="IP Allowlist" checked={state.ipAllowlist} onChange={(checked) => setState({ ...state, ipAllowlist: checked })} />
        <ToggleRow label="Audit Trail" checked={state.auditTrail} onChange={(checked) => setState({ ...state, auditTrail: checked })} />

        <label style={labelStyle}>
          API Key Rotation (days)
          <input
            value={state.apiKeyRotationDays}
            onChange={(e) => setState({ ...state, apiKeyRotationDays: e.target.value })}
            style={inputStyle}
          />
        </label>
      </div>
    </div>
  );
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <label style={toggleRowStyle}>
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 14,
};

const mutedStyle = { color: "rgba(255,255,255,0.72)", marginTop: 0 };

const labelStyle = {
  display: "grid",
  gap: 5,
  fontSize: 14,
};

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 8,
  background: "rgba(0,0,0,0.3)",
  color: "#fff",
  padding: "10px 12px",
};

const toggleRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  padding: "10px 12px",
  background: "rgba(255,255,255,0.02)",
};
