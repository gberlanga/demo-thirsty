export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    ingredients: { name: string, amount: string }[];
}

export interface ApiDrinkResponse {
    drinks: {
        idDrink: string,
        strDrink: string,
        strDrinkThumb: string,
        strInstructions: string,
        [key: string]: string | null
    }[]
}