export const SAMPLE_BLUEPRINT = `{
  "name": "Devapp Workspace",
  "stack": "react-vite",
  "theme": "dark",
  "screens": [
    { "id": "home", "title": "Home", "components": ["header", "list", "primaryButton"] },
    { "id": "settings", "title": "Settings", "components": ["header", "modal"] }
  ],
  "data": [
    { "model": "Item", "fields": ["id", "title", "createdAt"] }
  ],
  "actions": ["createItem", "deleteItem"]
}`;
