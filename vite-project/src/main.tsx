import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) { // typeguard
  throw new Error(
    "Avez-vous pensé à ajouter l'objet avec l'id root dans votre html ?"
  );
}

// typeguard : vu que j'ai controlé avant si null, et bien ici, tsc reconnait que pas null
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
