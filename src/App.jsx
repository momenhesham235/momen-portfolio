import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

import NotFound from "./pages/notFound/NotFound.jsx";
import { ScrollTop, Header, Footer } from "@components/common";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Details = lazy(() => import("./pages/details/Details.jsx"));

function App() {
  const baseUrl = "/momen-portfolio/";

  return (
    <>
      <main className="container" id="main">
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
