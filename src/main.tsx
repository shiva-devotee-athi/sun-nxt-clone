import { createRoot } from "react-dom/client";
import "./styles/css/styles.css";
import "./styles/css/slick.css";
import "./styles/css/carousels.css";
import App from "./App";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ToastContainer />
  </>
);
