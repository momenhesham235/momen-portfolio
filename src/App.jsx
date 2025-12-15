import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";

import { IoIosArrowUp } from "react-icons/io";

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
