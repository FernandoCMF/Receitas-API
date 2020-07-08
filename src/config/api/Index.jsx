import React, {useEffect, useState} from 'react';
import Receitas from '../data/Receitas';
import "./Index.css";


export default props => {
  const APP_ID = "7b31513d";
  const APP_KEY = "9dec484ca5e873318b7145ee8b83ff4f";

  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    getReceitas();
  },[query]);

  const getReceitas = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    console.log(data.hits);

    setReceitas(data.hits);
  };

  const updateBusca = e => {
    setBusca(e.target.value);
  }

  const getBusca = e => {
    e.preventDefault();
    setQuery(busca);
    setBusca('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getBusca}>
        <input className="search-bar"
          type="text"
          value={busca}
          onChange={updateBusca}
        />
        <button className="search-button"
          type="submit"> Search </button>
      </form>
      <div className="catalog">
        {receitas.map(receita =>(
          <Receitas
            key={receita.recipe.label}
            title={receita.recipe.label}
            calories={receita.recipe.calories.toFixed(3)}
            image={receita.recipe.image}
            ingredients={receita.recipe.ingredients}
            />
        ))}
      </div>
    </div>
  );
}
