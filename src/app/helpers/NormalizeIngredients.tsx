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
  };
  
  // Normalize ingredients
  export const normalizeIngredient = (ingredient: string): number | null => {
        const match = ingredient.match(/^(\d+(?:\s\d+\/\d+)?|\d+\.\d+)\s*(\w+)$/);
        if(!match) return null;
        const [_, value, unit] = match;
        const numericValue = parseFloat(value);
        
        const conversionRate = unitConversionTable[unit.toLowerCase()];
        if(!conversionRate) return null;

        return numericValue * conversionRate;
  };
  