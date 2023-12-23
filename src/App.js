import { useState } from "react";
import "./App.css";
import icondice from "./images/icon-dice.svg";
import destopdivider from "./images/pattern-divider-desktop.svg";
import mobiledivider from "./images/pattern-divider-mobile.svg";

function App() {
  const [Advise, setadvise] = useState({
    slip: {
      id: 117,
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking actions.",
    },
  });
  const width = window.innerWidth;
  const time = new Date();
  const url = `https://api.adviceslip.com/advice?timestramp=${time.getTime()}`;
  async function fetchadvise() {
    const response = await fetch(url);
    const theadvise = await response.json();
    setadvise(theadvise);
  }

  const advisesetter = () => {
    fetchadvise();
  };
  return (
    <div className="App-container">
      <main>
        <h4 className="advise-id">Advise # {Advise.slip.id}</h4>
        <p className="advise-content">"{Advise.slip.advice}"</p>
        <img
          src={width >= 500 ? destopdivider : mobiledivider}
          alt="none"
          className="seperator-img"
        />
        <button onClick={advisesetter}>
          <img src={icondice} alt="icondice" />
        </button>
      </main>
    </div>
  );
}

export default App;
