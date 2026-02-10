import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRoute.jsx";

// styles
import "@styles/index.css";

createRoot(document.getElementById("root")).render(<AppRouter />);
