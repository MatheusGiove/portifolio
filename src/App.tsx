import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Profile />
      </main>
    </>
  );
};

export default App;
