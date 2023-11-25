import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Graduate from "./Pages/Graduate/Graduate";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Profile />
        <Graduate />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
