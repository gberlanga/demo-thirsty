import { Drink } from "../types/drink";

export const formatDrink = (drink: { [key: string]: string | null }): Drink => {
  const ingredients: { name: string; amount: string }[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        amount: measure || "",
      });
    }
  }

  return {
    idDrink: drink.idDrink || "",
    strDrink: drink.strDrink || "",
    strDrinkThumb: drink.strDrinkThumb || "",
    strInstructions: drink.strInstructions || "",
    ingredients,
  };
};