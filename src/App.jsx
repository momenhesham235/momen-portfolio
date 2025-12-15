import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./components/header/Header.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";

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
        <Footer />
      </main>
    </>
  );
}

export default App;
