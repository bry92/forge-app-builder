import { TAB_GROUPS } from "../pages/tabs.js";

export default function Sidebar({ activeTab, onSelectTab }) {
  return (
    <aside
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        padding: 14,
        alignSelf: "start",
        position: "sticky",
        top: 12,
        maxHeight: "calc(100vh - 40px)",
        overflowY: "auto",
      }}
    >
      {TAB_GROUPS.map((group) => (
        <section key={group.section} style={{ marginBottom: 12 }}>
          <div
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1.1,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 6,
            }}
          >
            {group.section}
          </div>
          <div style={{ display: "grid", gap: 4 }}>
            {group.tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => onSelectTab(tab)}
                  style={{
                    textAlign: "left",
                    borderRadius: 10,
                    padding: "10px 11px",
                    border: isActive
                      ? "1px solid rgba(255,130,61,0.9)"
                      : "1px solid rgba(255,255,255,0.06)",
                    background: isActive
                      ? "linear-gradient(90deg, rgba(255,107,43,0.2), rgba(255,107,43,0.05))"
                      : "rgba(255,255,255,0.02)",
                    color: isActive ? "#ffd6c3" : "#ffffff",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </aside>
  );
}
