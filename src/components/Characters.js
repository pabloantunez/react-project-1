export default function Characters(props) {
    const { characters, setCharacters } = props //* En la variable characters se quedan guardados los datos que ingresan del props
    const resetCharacters = () => {
        setCharacters(null); //* Setea la variable de setCharacters en null y en el app.js la ve nula, volviendola a la home.
        console.log("reseteando");
    }
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
        <div className="container-characters">
            {characters.map((character, index) => ( //* Aca se realiza el 'for' con el metodo 'map' donde character va a ser la variable que va a tomar de valor de 'characters'
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className="alive"></span>
                                Alive
                                </>
                            ): (
                                <>
                                <span className="dead"></span>
                                Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>

                </div>
            ))}

        </div>
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
    </div>
  );
}