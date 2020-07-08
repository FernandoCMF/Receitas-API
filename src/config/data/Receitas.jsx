import React from 'react';
import './Receitas.css';

const Receitas = ({title, calories, image, ingredients} ) => {
  return(
    /*Não é atribuir a key dessa forma*/
    <div className="receita">
      <h1>{title}</h1>
        <ol className="ingredient-container">
          {ingredients.map((ingredient, index) =>(
            <li className="ingredient-text" key={index}>
              {ingredient.text}
            </li>
          ))}
        </ol>
      <p> value calorie = {calories}</p>
      <img className="image" src={image} alt=""/>
    </div>

  );
}
export default Receitas;
