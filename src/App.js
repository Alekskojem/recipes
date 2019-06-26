import React from "react";
import "./App.css";
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
calss App extends Comment {
function App {
  state = {
    recipes:[],
    url: "https://www.food2fork.com/api/search?key=0d352ac2d13aa49c465b8438363abedc"
  };
  return (
    <React.Fragment>
      <RecipeList />
      <RecipeDetails />
    </React.Fragment>
      );
  }
}

export default App;
