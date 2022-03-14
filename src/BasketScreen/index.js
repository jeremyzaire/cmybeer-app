import { Link } from "react-router-dom";
import Screen from "../Screen";

export default function BasketScreen() {
  return (
    <>
      <Screen
        title="HomeScreen"
        navigation={<Link to="/">Retour à la page d'accueil</Link>}
      />
    </>
  );
}
