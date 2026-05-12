import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header, Footer, SkipLink } from "@components/common";

const MainLayout = () => {
  const { pathname } = useLocation();
  const hideHeader = pathname.startsWith("/details");

  return (
    <div className="container" id="main">
      {!hideHeader && (
        <>
          <SkipLink />
          <Header />
        </>
      )}

      <main className="main-content" id="main-content">
        <Outlet />
      </main>

      <Toaster />
      <Footer />
    </div>
  );
};

export default MainLayout;
