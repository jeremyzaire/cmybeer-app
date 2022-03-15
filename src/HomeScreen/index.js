import { Grid } from "@mui/material";
import Beer from "../Beer";
import Screen from "../Screen";

import "./styles.css";

export default function HomeScreen() {
  // const beers = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const beers = new Array(20).fill(null).map((_, i) => ({
    id: i,
  }));

  return (
    <Screen>
      <Grid container justifyContent="space-between" spacing={4}>
        {beers.map(({ id }) => (
          <Grid key={id} item>
            <Beer id={id} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
