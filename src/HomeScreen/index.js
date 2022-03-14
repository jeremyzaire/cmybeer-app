import Beer from "../Beer";
import Screen from "../Screen";

import "./styles.css";

export default function HomeScreen() {
  const beers = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Screen>
      {beers.map(({ id }) => (
        <Beer id={id} />
      ))}
    </Screen>
  );
}
