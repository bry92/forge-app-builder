export default function PlaceholderPage({ title, description }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        padding: 24,
        minHeight: 420,
      }}
    >
      <h1 style={{ margin: "0 0 8px", fontSize: 30, lineHeight: 1.1 }}>{title}</h1>
      <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", maxWidth: 760 }}>
        {description}
      </p>
    </div>
  );
}
