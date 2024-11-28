interface Ingredient {
    name: string;
    amount: string;
  }
  
  interface NormalizedIngredient {
    name: string;
    amountInMl: number;
  }
  
  // Conversion table
  const unitConversionTable: Record<string, number> = {
    oz: 29.5735,    // Ounces to milliliters
    cup: 240,       // Cups to milliliters
    tsp: 4.92892,   // Teaspoons to milliliters
    tblsp: 14.7868, // Tablespoons to milliliters
    cl: 10,         // Centiliters to milliliters
    shot: 44.3603   // shot to milliliters
  };

  const searchTerms = /oz|cup|tsp|tblsp|cl|shot/;
  
  // Normalize ingredients
  export const normalizeIngredient = (ingredient: string): number | null => {
    ingredient = ingredient.toLocaleLowerCase();
    const index = ingredient.search(searchTerms);
    if(index == -1) return null;
    const value = ingredient.substring(0, index-1);
    const unit = ingredient.substring(index)
  
    // Convert mixed fractions to decimals
    const numericValue = value.includes("/")
      ? value
          .split(" ")
          .reduce((acc, part) =>
            part.includes("/")
              ? acc + eval(part) // Convert fraction to decimal
              : acc + parseFloat(part), 0)
      : parseFloat(value);
  
    console.log(`numericValue: ${numericValue}`);

    console.log(`${unit} and ${unit.trim().toLocaleLowerCase()}`)
  
    // Check if unit is supported
    const conversionRate = unitConversionTable[unit.trim()];
    console.log(`${unit} conv = ${conversionRate}`)
    if (!conversionRate) return null;
  
    // Return normalized value in milliliters
    return numericValue * conversionRate;
  };
  