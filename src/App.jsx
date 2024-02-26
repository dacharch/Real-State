import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value" ;
import Contact from "./components/Contacts/Contact";
import "./App.css"
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <div className="white-gradient"> </div>
        <Header />
        <Hero />
      </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
    </div>

  );
}

export default App;
