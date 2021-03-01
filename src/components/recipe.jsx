import React, { useEffect, useState } from 'react'
import notImage from '../img/notImage.jpg'


const Recipe = ({recipe}) => {

   const [showColories, setShowColories] = useState(false)
   const [showIngredients, setShowIngredients] = useState(false)

   useEffect(() => {
      document.addEventListener('click', handleClickOutside)
      return () => {
         document.removeEventListener('click', handleClickOutside)
      }
   }, [])
 
   const handleClickOutside= (event) => {
      const ref = document.querySelector('.slick-list')
      if (!event.path.includes(ref)) {
         setShowColories(false)
         setShowIngredients(false)
      }
  }

   return (
      <div className='recipe'>
         <h2 className='recipe__title'>{recipe.label}</h2>
         <div className='recipe__info'>
            <img className='recipe__img' src={recipe.image} />
            <div className='recipe__colories'><span>Colories:</span>{recipe.calories.toFixed(1)}</div>
            {
               showColories && <div className='recipe__composition'>
                  {recipe.digest.map(item => (
                     <div className='recipe__item' key={item.label}> <span>{item.label}:</span>{item.total.toFixed(1)} col-s</div>)
                  )}
               </div>
            }
            {
               showIngredients && <div className='recipe__composition'>
               <h2>Ingredients:</h2>
               {recipe.ingredients.map(item => (
                  <div className='recipe__item'>
                  <img src={item.image?item.image:notImage}/>
                  <div key={item.text}> <span>{item.text}, weight:</span>{item.weight.toFixed(1)} gram</div>
                  </div>)
               )}
               </div>
               
            }
            {
               showColories ? <div   className='button__container'><button className='recipe__button' 
               onClick={() => {setShowColories(false) }}>Close colories</button></div> :
               <div   className='button__container'><button className='recipe__button' 
               onClick={() => {setShowColories(true); }}>Show colories</button></div>
            }
            {
               showIngredients ? <div  className='button__container'><button className='recipe__button' 
               onClick={() => {setShowIngredients(false); }}>Close ingredients</button></div> :
               <div   className='button__container'><button className='recipe__button' 
               onClick={() => {setShowIngredients(true); }}>Show ingredients</button></div>
            }
         </div>
      </div>
   )
}

export default Recipe