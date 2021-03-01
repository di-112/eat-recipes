import React from 'react'
import Slider from 'react-slick'
import Recipe from './recipe'


class RecipesSlider extends React.Component {
   constructor(props){
    super(props)
   }
   render(){
      const settings = {
         infinite: true,
         speed: 0,
         slidesToShow: 3,
         slidesToScroll: 3,
         waitForAnimate: true,
         responsive:[
            {
               breakpoint: 1400,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               }
            },
            {
               breakpoint: 950,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      }
      return (
         <Slider className="recipes__slider" {...settings}>  
            {this.props.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.label}/>)}
         </Slider>
      )
   }
}

export default RecipesSlider