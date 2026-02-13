import { useMemo, useState } from "react";

const DEFAULT_AGENTS = [
  {
    id: "agent-architect",
    name: "App Architect",
    role: "Plans feature architecture and folder layout.",
    model: "gpt-4.1-mini",
    systemPrompt:
      "You are an expert software architect for React and API systems.",
  },
];

export default function AgentsPage() {
  const [agents, setAgents] = useState(DEFAULT_AGENTS);
  const [activeAgentId, setActiveAgentId] = useState(DEFAULT_AGENTS[0].id);
  const [taskInput, setTaskInput] = useState("Generate a task breakdown for adding auth.");
  const [runOutput, setRunOutput] = useState("");

  const [newAgent, setNewAgent] = useState({
    name: "",
    role: "",
    model: "gpt-4.1-mini",
    systemPrompt: "",
  });

  const activeAgent = useMemo(
    () => agents.find((agent) => agent.id === activeAgentId) || agents[0],
    [agents, activeAgentId]
  );

  function createAgent(event) {
    event.preventDefault();
    if (!newAgent.name.trim()) return;

    const created = {
      id: `agent-${Date.now()}`,
      name: newAgent.name.trim(),
      role: newAgent.role.trim() || "General purpose assistant.",
      model: newAgent.model.trim() || "gpt-4.1-mini",
      systemPrompt: newAgent.systemPrompt.trim() || "You are a helpful AI agent.",
    };

    setAgents((prev) => [created, ...prev]);
    setActiveAgentId(created.id);
    setNewAgent({
      name: "",
      role: "",
      model: "gpt-4.1-mini",
      systemPrompt: "",
    });
  }

  function runAgent() {
    if (!activeAgent) return;
    const summary = [
      `[AGENT] ${activeAgent.name} (${activeAgent.model})`,
      `[ROLE] ${activeAgent.role}`,
      `[TASK] ${taskInput || "No task provided."}`,
      "[RESULT] Suggested next steps:",
      "1. Define requirements and acceptance criteria.",
      "2. Implement smallest working slice.",
      "3. Add validation and tests.",
    ].join("\n");
    setRunOutput(summary);
  }

  return (
    <div style={panelStyle}>
      <h1 style={{ marginTop: 0, marginBottom: 8 }}>Agents</h1>
      <p style={mutedStyle}>
        Create specialized AI agents and run quick task simulations.
      </p>

      <div style={layoutStyle}>
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Agent List</h2>
          <div style={{ display: "grid", gap: 6 }}>
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                style={{
                  ...agentButtonStyle,
                  borderColor:
                    activeAgent?.id === agent.id
                      ? "rgba(255,107,43,0.85)"
                      : "rgba(255,255,255,0.1)",
                  background:
                    activeAgent?.id === agent.id
                      ? "rgba(255,107,43,0.2)"
                      : "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ fontWeight: 700 }}>{agent.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                  {agent.model}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Create Agent</h2>
          <form onSubmit={createAgent} style={{ display: "grid", gap: 8 }}>
            <input
              value={newAgent.name}
              onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
              placeholder="Agent name"
              style={inputStyle}
            />
            <input
              value={newAgent.role}
              onChange={(e) => setNewAgent({ ...newAgent, role: e.target.value })}
              placeholder="Role"
              style={inputStyle}
            />
            <input
              value={newAgent.model}
              onChange={(e) => setNewAgent({ ...newAgent, model: e.target.value })}
              placeholder="Model"
              style={inputStyle}
            />
            <textarea
              value={newAgent.systemPrompt}
              onChange={(e) =>
                setNewAgent({ ...newAgent, systemPrompt: e.target.value })
              }
              placeholder="System prompt"
              style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
            />
            <button type="submit" style={buttonStyle}>
              Add Agent
            </button>
          </form>
        </section>
      </div>

      <section style={{ ...sectionStyle, marginTop: 12 }}>
        <h2 style={sectionTitleStyle}>Run Agent</h2>
        <textarea
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
          placeholder="Describe what this agent should do"
        />
        <button onClick={runAgent} style={{ ...buttonStyle, marginTop: 8 }}>
          Run {activeAgent?.name || "Agent"}
        </button>
        <pre style={outputStyle}>
          {runOutput || "Run an agent task to see output here."}
        </pre>
      </section>
    </div>
  );
}

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 14,
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};

const sectionStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 10,
  background: "rgba(255,255,255,0.02)",
};

const sectionTitleStyle = { marginTop: 0, marginBottom: 8, fontSize: 17 };

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 8,
  background: "rgba(0,0,0,0.3)",
  color: "#fff",
  padding: "10px 12px",
};

const buttonStyle = {
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 600,
};

const agentButtonStyle = {
  textAlign: "left",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  padding: "8px 10px",
  color: "#fff",
  background: "rgba(255,255,255,0.02)",
  cursor: "pointer",
};

const outputStyle = {
  marginTop: 10,
  minHeight: 120,
  whiteSpace: "pre-wrap",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 12,
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  background: "rgba(0,0,0,0.3)",
  padding: 10,
};

const mutedStyle = { color: "rgba(255,255,255,0.72)", marginTop: 0 };
