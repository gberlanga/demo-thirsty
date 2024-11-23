import { FC } from "react";
import Link from "next/link";
import { Drink } from "../types/drink";

interface DrinkListProps {
    drinks: Drink[];
}

const DrinkList: FC<DrinkListProps> = ({ drinks }) => {
    return (
        <div className="drink-list space-y-4">
            {drinks.map((drink) => (
                <Link href={`/drink/${drink.idDrink}`} key={drink.idDrink}>
                    <div className="flex items-center justify-between h-16 bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition">
                        <div className="flex items-center space-x-4">
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <p className="text-lg font-semibold text-gray-700">{drink.strDrink}</p>
                        </div>
                        <span className="text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

// const DrinkList: FC<DrinkListProps> = ({ drinks }) => {
//     return (
//         <div className="drink-list">
//             {drinks.map((drink) => (
//                 <Link href={`/drink/${drink.idDrink}`} key={drink.idDrink}>
//                     <div className="drink-item">
//                         <img src={drink.strDrinkThumb} alt={drink.strDrink} />
//                         <p>{drink.strDrink}</p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// };

export default DrinkList