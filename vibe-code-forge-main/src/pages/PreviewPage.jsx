import { useMemo, useState } from "react";
import { componentMap } from "../engine/componentRegistry.jsx";
import { generateProjectFiles } from "../engine/projectGenerator.mjs";
import { SAMPLE_BLUEPRINT } from "./sampleBlueprint.js";

export default function PreviewPage() {
  const [prompt, setPrompt] = useState("Build a dashboard with users, analytics, and publishing.");
  const [blueprint, setBlueprint] = useState(SAMPLE_BLUEPRINT);
  const [activeScreen, setActiveScreen] = useState(0);
  const [selectedFile, setSelectedFile] = useState("");

  const parsed = useMemo(() => {
    try {
      return JSON.parse(blueprint);
    } catch {
      return null;
    }
  }, [blueprint]);

  const generatedFiles = useMemo(() => {
    if (!parsed) return {};
    try {
      return generateProjectFiles(parsed);
    } catch {
      return {};
    }
  }, [parsed]);

  const fileList = Object.keys(generatedFiles);
  const selectedFileContent = selectedFile ? generatedFiles[selectedFile] : "";

  function generateMockBlueprint() {
    const appName = prompt.trim() ? `App for: ${prompt.trim().slice(0, 24)}` : "Devapp Workspace";
    setBlueprint(
      JSON.stringify(
        {
          ...JSON.parse(SAMPLE_BLUEPRINT),
          name: appName,
        },
        null,
        2
      )
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <div style={panelStyle}>
        <h2 style={titleStyle}>Prompt</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={textAreaStyle}
        />
        <button onClick={generateMockBlueprint} style={buttonStyle}>
          Generate Blueprint
        </button>
      </div>

      <div style={panelStyle}>
        <h2 style={titleStyle}>Blueprint JSON</h2>
        <textarea
          value={blueprint}
          onChange={(e) => setBlueprint(e.target.value)}
          style={{ ...textAreaStyle, minHeight: 270, fontFamily: mono }}
        />
      </div>

      <div style={{ ...panelStyle, minHeight: 340 }}>
        <h2 style={titleStyle}>File Tree</h2>
        {fileList.length === 0 ? (
          <div style={mutedStyle}>No files generated.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10, minHeight: 250 }}>
            <div style={{ borderRight: "1px solid rgba(255,255,255,0.08)", paddingRight: 8, overflow: "auto" }}>
              {fileList.map((file) => (
                <div
                  key={file}
                  onClick={() => setSelectedFile(file)}
                  style={{
                    cursor: "pointer",
                    padding: "5px 8px",
                    borderRadius: 6,
                    marginBottom: 2,
                    background: selectedFile === file ? "rgba(255,107,43,0.25)" : "transparent",
                    fontFamily: mono,
                    fontSize: 12,
                  }}
                >
                  {file}
                </div>
              ))}
            </div>
            <pre style={preStyle}>{selectedFileContent || "Select a file"}</pre>
          </div>
        )}
      </div>

      <div style={{ ...panelStyle, minHeight: 340 }}>
        <h2 style={titleStyle}>Preview</h2>
        {!parsed || !Array.isArray(parsed.screens) || parsed.screens.length === 0 ? (
          <div style={mutedStyle}>Invalid blueprint or no screens found.</div>
        ) : (
          <>
            <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
              {parsed.screens.map((screen, index) => (
                <button
                  key={screen.id || index}
                  onClick={() => setActiveScreen(index)}
                  style={{
                    ...buttonStyle,
                    width: "auto",
                    padding: "6px 10px",
                    marginTop: 0,
                    background: index === activeScreen ? "#ff5a1f" : "rgba(255,255,255,0.08)",
                  }}
                >
                  {screen.title || `Screen ${index + 1}`}
                </button>
              ))}
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 12 }}>
              {parsed.screens[activeScreen]?.components?.map((comp, index) => {
                const Comp = componentMap[comp];
                return Comp ? <Comp key={`${comp}-${index}`} /> : null;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const mono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 12,
};

const titleStyle = { marginTop: 0, marginBottom: 8, fontSize: 17 };

const textAreaStyle = {
  width: "100%",
  minHeight: 160,
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  background: "rgba(0,0,0,0.3)",
  color: "#fff",
  padding: 10,
  resize: "vertical",
};

const buttonStyle = {
  marginTop: 8,
  width: "100%",
  padding: "10px 12px",
  border: "none",
  borderRadius: 8,
  background: "#ff5a1f",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};

const preStyle = {
  margin: 0,
  whiteSpace: "pre-wrap",
  wordBreak: "break-all",
  overflow: "auto",
  fontFamily: mono,
  fontSize: 12,
  background: "rgba(0,0,0,0.26)",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.08)",
  padding: 10,
};

const mutedStyle = { color: "rgba(255,255,255,0.66)", fontSize: 13 };
