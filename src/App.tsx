import React from 'react';
import './App.css';
import Typewriter from "./typewriter/";

function App() {
  return (
    <div className="App">
      <Typewriter onInit={(typewriter) => {
        typewriter
          .typeString("Frontend Engineer")
          .pauseFor(500)
          .typeString(".")
          .start();
      }} />
      <h1>hello</h1>
    </div>
  );
}

export default App;
