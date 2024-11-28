
import axios from "axios";
import { ApiDrinkResponse, Drink } from "./types/drink";
import { formatDrink } from "./helpers/FormatDrink";
import Homepage from "./components/HomePage";


const Home = async () => {
    const fetchDrinks = async (query: string): Promise<Drink[]> => {
        'use server'
        const res = await axios.get<ApiDrinkResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        );
        if(!res.data.drinks) {
            return [];
        }
        return res.data.drinks.map((drink) => formatDrink(drink));

        
    };

    return (
        <div className="min-h-screen">
            <Homepage fetchDrinks={fetchDrinks} />
        </div>
    );
};

export default Home;