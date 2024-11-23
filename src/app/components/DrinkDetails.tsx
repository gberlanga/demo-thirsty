import { FC } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Drink } from "../types/drink";

interface DrinkDetailsProps {
    drink: Drink
}

const DrinkDetails: FC<DrinkDetailsProps> = ({ drink }) => {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    console.log(`drink: ${drink}`)
    const ingredientsData = drink.ingredients.map((ingredient, index) => ({
        name: ingredient.name,
        amount: parseFloat(ingredient.amount) || 1,
        color: colors[index % colors.length]
    }));

    return (
        <div className="drink-detail">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <h1>{drink.strDrink}</h1>
            <h2>Ingredients</h2>
            <ul>
                {ingredientsData.map((item, index) => (
                    <li key={index}>
                        <span style={{ color: item.color }}>-</span> {item.amount} {item.name}
                    </li>
                ))}
            </ul>
            <PieChart width={400} height={400}>
                <Pie
                    data={ingredientsData}
                    dataKey="amount"
                    name="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {ingredientsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            <h2>Instructions</h2>
            <p>{drink.strInstructions}</p>
        </div>
    );
};

export default DrinkDetails;