import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTop";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
