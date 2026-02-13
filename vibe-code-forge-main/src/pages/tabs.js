import PreviewPage from "./PreviewPage.jsx";
import CodePage from "./CodePage.jsx";
import PublishPage from "./PublishPage.jsx";
import DomainsPage from "./DomainsPage.jsx";
import IntegrationsPage from "./IntegrationsPage.jsx";
import ApiPage from "./ApiPage.jsx";
import LogsPage from "./LogsPage.jsx";
import SettingsPage from "./SettingsPage.jsx";
import SecurityPage from "./SecurityPage.jsx";
import UsersPage from "./UsersPage.jsx";
import DataPage from "./DataPage.jsx";
import AnalyticsPage from "./AnalyticsPage.jsx";
import AgentsPage from "./AgentsPage.jsx";
import AutomationsPage from "./AutomationsPage.jsx";
import OverviewPage from "./OverviewPage.jsx";
import BetaPage from "./BetaPage.jsx";
import UpgradePage from "./UpgradePage.jsx";

export const TAB_GROUPS = [
  { section: "Builder", tabs: ["Preview", "Code"] },
  { section: "Ship", tabs: ["Publish", "Domains"] },
  { section: "Product", tabs: ["Overview", "Users", "Data", "Analytics", "Logs"] },
  { section: "AI", tabs: ["Agents", "Automations"] },
  { section: "Platform", tabs: ["Integrations", "API", "Security", "Settings", "Beta"] },
  { section: "Business", tabs: ["Upgrade"] },
];

export const TAB_DESCRIPTIONS = {
  Preview: "App builder workspace.",
  Code: "Generated code viewer.",
  Publish: "Deployment checklist.",
  Domains: "Custom domain setup.",
  Integrations: "Third-party connections.",
  API: "API docs and keys.",
  Logs: "Runtime and builder logs.",
  Settings: "Workspace settings.",
  Security: "Security controls.",
  Users: "User and team management.",
  Data: "Data models and records.",
  Analytics: "Product analytics.",
  Agents: "AI agent controls.",
  Automations: "Workflow automations.",
  Overview: "Project summary.",
  Beta: "Beta features.",
  Upgrade: "Plan and billing.",
};

export const TAB_PAGE_MAP = {
  Preview: PreviewPage,
  Code: CodePage,
  Publish: PublishPage,
  Domains: DomainsPage,
  Integrations: IntegrationsPage,
  API: ApiPage,
  Logs: LogsPage,
  Settings: SettingsPage,
  Security: SecurityPage,
  Users: UsersPage,
  Data: DataPage,
  Analytics: AnalyticsPage,
  Agents: AgentsPage,
  Automations: AutomationsPage,
  Overview: OverviewPage,
  Beta: BetaPage,
  Upgrade: UpgradePage,
};
