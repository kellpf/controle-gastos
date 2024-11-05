import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import routes from "./routes/routes.tsx";
import { GlobalProvider } from "./context/GlobalState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  </StrictMode>
);
