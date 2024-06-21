import { useState } from "react";
import "./App.css";
import ImageButton from "./components/Imagebtn";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Выберите предмет мебели, который хотите увидеть в своём интерьере</h1>
      </header>
      <div className="imageCon">
        <ImageButton />
      </div> 
    </div>
  );
}

export default App;
