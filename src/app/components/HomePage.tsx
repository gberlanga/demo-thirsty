'use client'
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
    const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)

    const onSearch = async (value: string) => {
        if(value === '') setFilterDrinks([]);
        else {
            const filteredDrinks = await fetchDrinks(value);
            setFilterDrinks(filteredDrinks);    
        }
        
    }

    return (
        <div className="min-h-screen grid grid-cols-1 gap-6 sm:grid-cols-3 bg-white">
                <div className="bg-gray-100 min-h-screen">
                    {/* Fixed Header */}
                    <div className="bg-gray-100 z-10 p-4 shadow-md">
                        <div>
                            <SearchBar onSearch={onSearch} />
                        </div>
                    </div>
            
                    {/* Main Content */}
                    <main className="rounded-lg overflow-y-auto p-4 space-y-6 sm:p-8">
                        {/* Drink List */}
                        <div className="space-y-4">
                            <DrinkList drinks={filterDrinks} onClick={setSelectedDrink} />
                        </div>
                    </main>
                </div>
            <div className="col-span-2 p-4 min-h-screen">
                <DrinkDetails drink={selectedDrink}/>
            </div>
        </div>
    );

}


export default Homepage;