import "./App.css";
import axios from "axios";
import { useState } from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setrecipes] = useState([]);
  const YOUR_APP_ID = "90aa39d6";
  const YOUR_APP_KEY = "255734cd2d8a83284f58b4a774c4c221";

  let url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
    let result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1 onClick={getRecipes} style={{color:"white"}}>Ozan's Favourites 🥗</h1>
      <form onSubmit={onSubmit} action="" className="search-form">
        <input
          className="app-input"
          type="text"
          placeholder="Search for"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="app-button" type="submit">
          Search
        </button>
      </form>

      <div className="grid-recipe">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
