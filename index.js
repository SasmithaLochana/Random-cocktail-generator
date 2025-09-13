import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    let imageUrl = response.data.drinks[0].strDrinkThumb;
    imageUrl += "/large";

    const drink = response.data.drinks[0];
    const selectedDrink = {
      name: response.data.drinks[0].strDrink,
      type: response.data.drinks[0].strAlcoholic,
      image: imageUrl,
    };

    const ingredients = [];

    for (let i = 1; i <= 15; i++){
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient){
        ingredients.push(ingredient);
      }
    }

    res.render("index.ejs", { drink: selectedDrink, ingredients });
    console.log(imageUrl);
  } catch (error) {
    console.log("Error:", error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
