'use client';
import { Drink } from "@/types/drink";
import { FC, useState } from "react";
import DrinkList from "./DrinkList";
import SearchBar from "./SearchBar";
import DrinkDetails from "./DrinkDetails";

interface HomepageProps {
    fetchDrinks: (query: string) => Promise<Drink[]>;
}

const Homepage: FC<HomepageProps> = ({ fetchDrinks }) => {
    const [filterDrinks, setFilterDrinks] = useState<Drink[]>([]);
    const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const onSelectDrink = (drink: Drink) => {
        setSelectedDrink(drink)
        setIsSidebarVisible(false);
    }

    const onSearch = async (value: string) => {
        if (value === '') setFilterDrinks([]);
        else {
            const filteredDrinks = await fetchDrinks(value);
            setFilterDrinks(filteredDrinks);
        }
    };
    console.log(filterDrinks)

    return (
        <div className="min-h-screen grid grid-cols-1 gap-6 md:grid-cols-3 bg-white">
            {/* Toggle Button for Mobile */}
            <button
                className={`md:hidden fixed top-4 z-20 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 ${
                    isSidebarVisible ? "right-4" : "left-4"
                }`}
                onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
                {isSidebarVisible ? "<<" : ">>"}
            </button>

            {/* Search and Drink List */}
            <div
                className={`absolute md:relative top-0 left-0 bg-gray-100 min-h-screen w-3/4 md:w-auto z-10 ${
                    isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
                {/* Fixed Header */}
                <div className="bg-gray-100 z-10 p-4 shadow-md">
                    <SearchBar onSearch={onSearch} />
                </div>

                {/* Scrollable Drink List */}
                <main className="rounded-lg overflow-y-auto p-4 space-y-6 sm:p-8 h-[calc(100vh-4rem)]">
                    <DrinkList drinks={filterDrinks} onClick={onSelectDrink} />
                </main>
            </div>

            {/* Drink Details */}
            <div className="col-span-2 p-4 min-h-screen md:fixed md:right-0 md:w-2/3">
                <DrinkDetails drink={selectedDrink} />
            </div>
        </div>
    );
};

export default Homepage;