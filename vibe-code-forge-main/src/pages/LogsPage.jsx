import { useMemo, useState } from "react";

const INITIAL_LOGS = [
  "[INFO] Connected to builder runtime.",
  "[INFO] Loaded 17 dashboard modules.",
  "[WARN] Using mock API log stream.",
  "[INFO] Build cache restored.",
];

export default function LogsPage() {
  const [logs, setLogs] = useState(INITIAL_LOGS);

  const visibleLogs = useMemo(() => [...logs].reverse(), [logs]);

  function pushLogLine() {
    const line = `[INFO] ${new Date().toLocaleTimeString()} heartbeat`;
    setLogs((prev) => [...prev, line]);
  }

  return (
    <div style={panelStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <h1 style={{ margin: 0 }}>Logs</h1>
        <button onClick={pushLogLine} style={buttonStyle}>Add Log Line</button>
      </div>
      <div style={streamStyle}>
        {visibleLogs.map((line, index) => (
          <div key={`${line}-${index}`} style={lineStyle}>{line}</div>
        ))}
      </div>
    </div>
  );
}

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 14,
};

const streamStyle = {
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  background: "rgba(0,0,0,0.28)",
  padding: 10,
  maxHeight: 500,
  overflowY: "auto",
};

const lineStyle = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 12,
  color: "#cde8ff",
  paddingBottom: 6,
};

const buttonStyle = {
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
};
