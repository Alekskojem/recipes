import React from "react";
import "./App.css";
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

calss App extends Component {
  state = {
    recipes: recipes,
        url: "https://www.food2fork.com/api/search?key=0d352ac2d13aa49c465b8438363abedc"
  };

//   async getRecipes() {
//     try {
//     const data = await fetch(this.state.url);
//     const jsonData = await data.jason();
//     this.setState({
//       recipes: jsonData.recipes
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// componentDidMount() {
//   this.getRecipes();
//}

render() {
  //console.log(this.state.recipes);
  
  return (
    <React.Fragment>
      <RecipeList recipes={this.state.recipes} />
      <RecipeDetails />
    </React.Fragment>
      );
  }
}

export default App;
