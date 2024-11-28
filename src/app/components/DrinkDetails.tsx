import { FC, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Drink } from "../types/drink";
import landingImage from "../assets/thirsty-landing-page.jpeg"
import Image  from "next/image"
import { normalizeIngredient } from "@/helpers/NormalizeIngredients";

interface DrinkDetailsProps {
    drink: Drink | null;
}

const DrinkDetails: FC<DrinkDetailsProps> = ({ drink }) => {
    if (!drink) {
      return (
        <div className="grid place-items-center h-screen">
            <Image
            src={landingImage}
            alt="Thirsty landing page"
            className="w-full max-w-3xl h-auto mx-auto rounded-xl"
            />
        </div>
        );
      }

  // Memoize the ingredient colors to persist across re-renders for the same drink
  const ingredientsData = useMemo(() => {
    return drink.ingredients.map((ingredient) => ({
      name: ingredient.name,
      amount: ingredient.amount,
      pieChartAmount:  normalizeIngredient(ingredient.amount),
      color: `hsl(${Math.abs(
        ingredient.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360
      )}, 70%, 80%)`, // Deterministic pastel colors based on ingredient name
    }));
  }, [drink]);

  return (
    <div className="drink-detail p-5 space-y-6">
      {/* Image View */}
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className=" mx-auto w-40 h-40 rounded-full object-cover"
        style={{marginTop:"30px"}}
      />

      {/* Name */}
      <h1 className="text-center text-xl font-bold mt-5">{drink.strDrink}</h1>

            {/* Ingredients Label */}
            <h2 className="text-lg font-bold ml-5 mb-5" style={{marginTop:"30px"}}>Ingredients</h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Legend */}
            <ul className="flex-wrap gap-4 m-5">
                {ingredientsData.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                    <div
                    className="w-5 h-5"
                    style={{ backgroundColor: item.color, borderRadius:"3px" }}
                    ></div>
                    <span className="text-base">
                    {item.name} {item.amount !== "" && `(${item.amount.trimEnd()})`}
                    </span>
                </li>
                ))}
            </ul>
            {/* Pie Chart */}
            <div className="m-5 justify-start">
                <PieChart width={120} height={120}>
                <Pie
                    data={ingredientsData}
                    dataKey="pieChartAmount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                >
                    {ingredientsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                </PieChart>
            </div>

    </div>

      {/* Instructions */}
      <div className="mx-5" style={{marginTop:"30px", marginBottom:"20px"}}>
        <h2 className="text-lg font-bold mb-4">Instructions</h2>
        <p className="text-base">{drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default DrinkDetails;