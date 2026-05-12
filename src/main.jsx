import { createRoot } from "react-dom/client";
import AppRouter from "@app/routes/AppRoute.jsx";

import "@app/config/i18n";
import "@styles/index.css";

createRoot(document.getElementById("root")).render(<AppRouter />);
