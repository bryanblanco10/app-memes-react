import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [image, setImage] = useState("");

  const onChangeText1 = (e) => {
    setText1(e.target.value);
  }

  const onChangeText2 = (e) => {
    setText2(e.target.value);
  }

  const onSelect = (e) => {
    setImage(e.target.value);
  }

  const onExport = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "meme.PNG";
      a.click();
    });
  }
  return (
    <div className="App">
      <select onChange={ onSelect } value={image} >
        <option value="">Seleccione...</option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />
      <input type="text" onChange={onChangeText1} value={ text1 } placeholder="Linea 1" /> <br />
      <input type="text" onChange={onChangeText2} value={ text2 } placeholder="Linea 2" /> <br />
      <button onClick={onExport}>Exportar</button>

      <div className="meme" id="meme">
        <span>{ text1 }</span> <br />
        <span>{ text2 }</span> <br />
        {image && 
          <img src={ require(`./assets/images/${image}.jpg`) } alt={image} />
        }
      </div>
    </div>
  );
}

export default App;
