import { useState } from "react";

export default function SettingsPage() {
  const [state, setState] = useState({
    autosave: true,
    darkMode: true,
    telemetry: false,
    workspaceName: "Devapp Workspace",
  });

  return (
    <div style={panelStyle}>
      <h1 style={{ marginTop: 0 }}>Settings</h1>
      <div style={gridStyle}>
        <label style={labelStyle}>
          Workspace Name
          <input
            value={state.workspaceName}
            onChange={(e) => setState({ ...state, workspaceName: e.target.value })}
            style={inputStyle}
          />
        </label>

        <ToggleRow label="Autosave" checked={state.autosave} onChange={(checked) => setState({ ...state, autosave: checked })} />
        <ToggleRow label="Dark Mode" checked={state.darkMode} onChange={(checked) => setState({ ...state, darkMode: checked })} />
        <ToggleRow label="Telemetry" checked={state.telemetry} onChange={(checked) => setState({ ...state, telemetry: checked })} />
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

const gridStyle = {
  display: "grid",
  gap: 10,
  maxWidth: 560,
};

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
