'use client'
import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import DrinkList from "./components/DrinkList";
import { ApiDrinkResponse, Drink } from "./types/drink";
import { formatDrink } from "./helpers/FormatDrink";


const Home = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const fetchDrinks = async (query: string) => {
        const res = await axios.get<ApiDrinkResponse>(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        );
        if(!res.data.drinks) {
            setDrinks([]);
            return
        }

        const drinkData: Drink[] = res.data.drinks.map((drink) => formatDrink(drink));
        setDrinks(drinkData);
    };



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full bg-gray-100 flex justify-center z-10 p-4 shadow-md">
                <div className="w-full max-w-4xl">
                    <SearchBar onSearch={fetchDrinks} />
                </div>
            </div>
    
            {/* Main Content */}
            <div className="pt-24 w-full flex justify-center">
                <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 space-y-6 sm:p-8">
                    {/* Drink List */}
                    <div className="space-y-4">
                        <DrinkList drinks={drinks} />
                    </div>
                </main>
            </div>
        </div>
    );

    // return (
    //     <div className="min-h-screen bg-gray-100">
     
        
    
    //         {/* Main Content */}
    //         <div className="pt-20 flex items-center justify-center">
    //             <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 space-y-6 sm:p-8">
    //                 {/* Fixed Search Bar */}
    //                 <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10 p-4">
    //                     <SearchBar onSearch={fetchDrinks} />
    //                 </div>
    //                 {/* Drink List */}
    //                 <div className="space-y-4">
    //                     <DrinkList drinks={drinks} />
    //                 </div>
    //             </main>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //         <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 space-y-6 sm:p-8">
    //             {/* Search Bar */}
    //             <div>
    //                 <SearchBar onSearch={fetchDrinks} />
    //             </div>
    
    //             {/* Drink List */}
    //             <div className="space-y-4">
    //                 <DrinkList drinks={drinks} />
    //             </div>
    //         </main>
    //     </div>
    // );
    // return (
    //     <div className="min-h-screen bg-gray-100">
    //         <main className="grid grid-cols-3 gap-4 p-4">
    //             {/* Left Side */}
    //             <div className="col-span-1 bg-white shadow-lg rounded-lg p-4 space-y-4">
    //                 <div className="sticky top-4">
    //                     <SearchBar onSearch={fetchDrinks} />
    //                     <DrinkList drinks={drinks} />
    //                 </div>
    //             </div>
    //         </main>
    //     </div>
    // );

    // return (
    //     <div>
    //         <main>
    //             <div className="columns-2">
    //                 <SearchBar onSearch={fetchDrinks} />
    //             </div>
    //             <DrinkList drinks={drinks} />
    //         </main>
    //     </div>
    // );
};

export default Home;