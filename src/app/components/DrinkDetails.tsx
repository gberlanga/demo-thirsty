import { FC } from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Drink } from "../types/drink";

interface DrinkDetailsProps {
    drink: Drink | null
}

// const DrinkDetails: FC<DrinkDetailsProps> = ({ drink }) => {
//     let ingredientsData: { name: string, amount: number, color: string }[] = [];
//     if(drink) {
//         const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
//         ingredientsData = drink.ingredients.map((ingredient, index) => ({
//             name: ingredient.name,
//             amount: parseFloat(ingredient.amount) || 1,
//             color: colors[index % colors.length]
//         }));
//     }

//     return (
//         <>
//         {drink === null ? (
//         <p>empty</p>
//         ) : (
//             <div className="drink-detail">
//                 <img src={drink.strDrinkThumb} alt={drink.strDrink} />
//                 <h1>{drink.strDrink}</h1>
//                 <h2>Ingredients</h2>
//                 <ul>
//                     {ingredientsData.map((item, index) => (
//                         <li key={index}>
//                             <span style={{ color: item.color }}>-</span> {item.amount} {item.name}
//                         </li>
//                     ))}
//                 </ul>
//                 <PieChart width={400} height={400}>
//                     <Pie
//                         data={ingredientsData}
//                         dataKey="amount"
//                         name="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={100}
//                         fill="#8884d8"
//                         label
//                     >
//                         {ingredientsData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                     </Pie>
//                     <Tooltip />
//                 </PieChart>
//                 <h2>Instructions</h2>
//                 <p>{drink.strInstructions}</p>
//             </div>
//         )}
//     </>
//     );
// };

// export default DrinkDetails;


import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DrinkDetails: FC<DrinkDetailsProps> = ({ drink }) => {
  if (!drink) {
    return <p className="text-center text-gray-500">empty</p>;
  }

  const ingredientsData = drink.ingredients.map((ingredient, index) => ({
    name: ingredient.name,
    amount: parseFloat(ingredient.amount) || 0,
    color: `hsl(${Math.random() * 360}, 70%, 80%)`, // Pastel colors
  }));

  return (
    <div className="drink-detail p-5 space-y-6">
      {/* Image View */}
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="mt-8 mx-auto w-40 h-40 rounded-lg object-cover"
      />

      {/* Name */}
      <h1 className="text-center text-2xl font-bold mt-5">{drink.strDrink}</h1>

      {/* Ingredients Label */}
      <h2 className="text-lg font-bold mt-8 ml-5 mb-5">Ingredients</h2>

      {/* Legend */}
      <ul className="flex flex-wrap gap-4 mx-5">
        {ingredientsData.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div
              className="w-5 h-5 rounded-md"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-base">{item.amount} {item.name}</span>
          </li>
        ))}
      </ul>

      {/* Pie Chart */}
      <div className="mx-5 my-5">
        <PieChart width={120} height={120}>
          <Pie
            data={ingredientsData}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label
          >
            {ingredientsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Instructions */}
      <div className="mx-5 mt-8 mb-5">
        <h2 className="text-lg font-bold mb-4">Instructions</h2>
        <p className="text-base">{drink.strInstructions}</p>
      </div>
    </div>
  );
};

export default DrinkDetails;
