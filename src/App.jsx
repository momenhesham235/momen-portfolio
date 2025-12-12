import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <div className="divider" />
        <Hero />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </main>
    </>
  );
}

export default App;
