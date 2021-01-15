import { useEffect, useState } from 'react';
import './scss/App.scss';
import * as axios from 'axios'
import Recipe from './components/recipe';

const API_KEY = 'e58fb8988ab9d94df69a34ae0e3a1bef'

const API_ID = 'e8f0abb2'

const App = () => {
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(()=>{
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`)
    .then(response=>{
      console.log(response)
      setRecipes(response.data.hits.map(hit=>hit.recipe))
    })
  },[query])
  
  const onChangeInput = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const Submit = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">

      <form onSubmit={Submit}>
        <input placeholder='Edit your query...' value={search} onChange={onChangeInput}/>
        <button type='submit'>Search</button>  
      </form>
      <div className="recipes">
      {recipes.map(recipe => <Recipe recipe={recipe} key={recipe.label}/>)}
      </div>
    </div>
  );
}

export default App;
