import React, { useState } from 'react'

const img_not_img = 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png'

const Recipe = ({recipe}) => {

   const [showColories, setShowColories] = useState(false)
   const [showIngredients, setShowIngredients] = useState(false)

   return (
      <div className='recipe'>
         <h2 className='recipe__title'>{recipe.label}</h2>
         <div className='recipe__info'>
            <img className='recipe__img' src={recipe.image} />
            <div className='recipe__colories'><span>Colories:</span>{recipe.calories.toFixed(1)}</div>
            {
               showColories && <div className='recipe__composition'>
                  {recipe.digest.map(item => (
                     <div className='recipe__item' key={item.label}> <span>{item.label}:</span>{item.total.toFixed(1)}</div>)
                  )}
               </div>
            }
            {
               showIngredients && <div className='recipe__composition'>
               <h2>Ingredients:</h2>
               {recipe.ingredients.map(item => (
                  <div className='recipe__item'>
                  <img src={item.image?item.image:img_not_img}/>
                  <div key={item.text}> <span>{item.text}, weight:</span>{item.weight.toFixed(1)} gram</div>
                  </div>)
               )}
               </div>
               
            }
            {
               showColories ? <div className='button__container'><button className='recipe__button' 
               onClick={() => {setShowColories(false); setShowIngredients(false) }}>Close</button></div> :
               <div className='button__container'><button className='recipe__button' 
               onClick={() => {setShowColories(true); setShowIngredients(false) }}>Show colories</button></div>
            }
            {
               showIngredients ? <div className='button__container'><button className='recipe__button' 
               onClick={() => {setShowIngredients(false); setShowColories(false)}}>Close</button></div> :
               <div className='button__container'><button className='recipe__button' 
               onClick={() => {setShowIngredients(true); setShowColories(false)}}>Show ingredients</button></div>
            }
         </div>
      </div>
   )
}

export default Recipe