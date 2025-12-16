import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./components/header/Header.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Projects = lazy(() => import("./pages/projects/Project.jsx"));
const Skills = lazy(() => import("./pages/skills/Skills.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));
const Details = lazy(() => import("./pages/details/Details.jsx"));

function App() {
  const baseUrl = "/momen-portfolio/";

  return (
    <>
      <main className="container">
        <Header />
        <Routes>
          <Route path={baseUrl} element={<Home />} />
          <Route path={`${baseUrl}about`} element={<About />} />
          <Route path={`${baseUrl}projects`} element={<Projects />} />
          <Route path={`${baseUrl}skills`} element={<Skills />} />
          <Route path={`${baseUrl}contact`} element={<Contact />} />
          <Route path={`${baseUrl}details/:id`} element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* Toaster */}
        <Toaster />
      </main>
    </>
  );
}

export default App;
