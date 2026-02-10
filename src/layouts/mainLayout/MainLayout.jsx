import { Outlet } from "react-router-dom";

import { Header, Footer, ScrollTop } from "@components/common";

import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="container" id="main">
      <Header />

      <Outlet />

      <ScrollTop />
      <Toaster />

      <Footer />
    </div>
  );
};

export default MainLayout;
