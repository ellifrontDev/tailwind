import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurPage from "./components/OurPage";
import Complete from "./components/Complete";
import Project from "./components/Project";
import Meet from "./components/Meet";
import Get from "./components/Get";
import Zone from "./components/Zone";

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
        <OurPage/>
      <Complete/>
        <Project/>
        <Meet/>
        <Get/>
        <Zone/>
    </div>
  );
}

export default App;
