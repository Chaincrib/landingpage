import Header from "./components/Header";
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
  <div>
    <Header  />
    <div className="App px-20 max-[800px]:px-5 hero">
          <Hero  />
          <About  />
          <HowItWorks  />
        <Team  />
        <FAQ  />
        <Footer  />
      </div>
  </div>
  );
}

export default App;
