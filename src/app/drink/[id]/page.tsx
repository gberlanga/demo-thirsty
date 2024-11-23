import DrinkDetails from '../../components/DrinkDetails';
import { Drink } from '../../types/drink';

interface DrinkPageProps {
  drink: Drink;
}

const DrinkPage: React.FC<DrinkPageProps> = ({ drink }) => {
  console.log(drink)
  return <DrinkDetails drink={drink} />;
};

export default DrinkPage;