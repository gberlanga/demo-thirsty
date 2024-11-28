import { FC } from "react";

import { Drink } from "../types/drink";

interface DrinkListProps {
    drinks: Drink[];
    onClick: (drink: Drink) => void; 
}

const DrinkList: FC<DrinkListProps> = ({ drinks, onClick }) => {
    return (
        <div className="drink-list space-y-4">
            {drinks.map((drink, index) => (
                    <div key={index} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition" style={{height: "60px"}}onClick={() => onClick(drink)}>
                        <div className="flex items-center space-x-4">
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="size-10 rounded-full object-cover mr-2.5 my-2.5"
                                style={{marginLeft:"15px"}}
                            />
                            <p className="lg:text-lg md:text-xs font-semibold text-gray-700">{drink.strDrink}</p>
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
            ))}
        </div>
    );
};

export default DrinkList