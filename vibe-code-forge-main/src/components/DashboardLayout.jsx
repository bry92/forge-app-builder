import { useMemo, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import {
  TAB_GROUPS,
  TAB_PAGE_MAP,
  TAB_DESCRIPTIONS,
} from "../pages/tabs.js";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("Preview");

  const ActivePage = TAB_PAGE_MAP[activeTab];
  const activeSection = useMemo(
    () => TAB_GROUPS.find((group) => group.tabs.includes(activeTab))?.section ?? "",
    [activeTab]
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 700px at 15% -10%, rgba(0,158,255,0.22), transparent), radial-gradient(1000px 700px at 100% 0%, rgba(255,102,0,0.2), transparent), #090b10",
        color: "#ffffff",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <strong style={{ letterSpacing: 0.3 }}>Devapp by Bryan</strong>
        <span style={{ color: "rgba(255,255,255,0.68)", fontSize: 13 }}>
          {activeTab}
        </span>
      </header>

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 16,
          padding: 16,
        }}
      >
        <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

        <section>
          <div
            style={{
              marginBottom: 10,
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Section: {activeSection} | {TAB_DESCRIPTIONS[activeTab]}
          </div>
          <ActivePage />
        </section>
      </main>
    </div>
  );
}
