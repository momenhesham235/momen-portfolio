import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header, Footer, SkipLink } from "@components/common";

/**
 * Main Layout Component
 * Wraps all pages with common header, footer, and utilities
 */
const MainLayout = () => {
  return (
    <div className="container" id="main">
      <SkipLink />
      <Header />

      <main className="main-content" id="main-content">
        <Outlet />
      </main>

      <Toaster />
      <Footer />
    </div>
  );
};

export default MainLayout;
