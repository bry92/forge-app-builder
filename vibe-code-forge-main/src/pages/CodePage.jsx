import { useMemo, useState } from "react";
import { generateProjectFiles } from "../engine/projectGenerator.mjs";
import { SAMPLE_BLUEPRINT } from "./sampleBlueprint.js";

export default function CodePage() {
  const [selectedFile, setSelectedFile] = useState("");

  const files = useMemo(() => {
    try {
      return generateProjectFiles(JSON.parse(SAMPLE_BLUEPRINT));
    } catch {
      return {};
    }
  }, []);

  const fileNames = Object.keys(files);
  const currentFile = selectedFile || fileNames[0] || "";
  const content = currentFile ? files[currentFile] : "";

  return (
    <div style={panelStyle}>
      <h1 style={{ marginTop: 0, marginBottom: 10 }}>Code</h1>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 12, minHeight: 500 }}>
        <div style={listStyle}>
          {fileNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedFile(name)}
              style={{
                ...fileButtonStyle,
                background: name === currentFile ? "rgba(255,107,43,0.24)" : "transparent",
                borderColor: name === currentFile ? "rgba(255,107,43,0.8)" : "rgba(255,255,255,0.08)",
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <div style={viewerStyle}>
          <div style={{ marginBottom: 8, color: "rgba(255,255,255,0.75)", fontSize: 13 }}>{currentFile || "No file selected"}</div>
          <pre style={preStyle}>{content}</pre>
        </div>
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

const listStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 8,
  background: "rgba(255,255,255,0.02)",
  overflowY: "auto",
};

const fileButtonStyle = {
  width: "100%",
  textAlign: "left",
  marginBottom: 5,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 12,
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 6,
  background: "transparent",
  padding: "6px 8px",
  cursor: "pointer",
};

const viewerStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 10,
  background: "rgba(0,0,0,0.2)",
};

const preStyle = {
  margin: 0,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  maxHeight: 460,
  overflow: "auto",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 12,
  lineHeight: 1.5,
};
