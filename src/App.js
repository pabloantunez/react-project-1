import imageRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  // componente encargado de renderizar todos los datos
  const [ characters, setCharacters ] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character'); //* fetch: utilizado para realizar solicitudes HTTP
    const characterApi = await api.json() //* Se transforma la respuesta en un json
    setCharacters(characterApi.results) //* va a setear en la variable 'characters' el valor que tiene el response en la key results.
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        { characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/> //* characters va a ser el props que le voy a pasar al componente y ese props va a tomar el valor de la variable characters
        ) :  (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
