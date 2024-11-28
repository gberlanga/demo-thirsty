import { Drink } from "../types/drink";

export const formatDrink = (drink: { [key: string]: string | null }): Drink => {
  const ingredients: { name: string; amount: string }[] = [];

  let hasIngredients = true;
  let i = 1;

  while (hasIngredients) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        amount: measure || "",
      });
      i++;
    } else {
      break;
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