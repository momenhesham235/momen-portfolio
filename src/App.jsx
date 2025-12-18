import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./components/header/Header.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollTop from "./components/common/scrollTop/ScrollTop.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Details = lazy(() => import("./pages/details/Details.jsx"));

function App() {
  const baseUrl = "/momen-portfolio/";

  return (
    <>
      <main className="container">
        <Header />
        <Routes>
          <Route path={baseUrl} element={<Home />} />
          <Route path={`${baseUrl}details/:id`} element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollTop />
        <Footer />
        {/* Toaster */}
        <Toaster />
      </main>
    </>
  );
}

export default App;
