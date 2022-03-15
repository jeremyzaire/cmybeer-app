import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import Beer from "../Beer";
import Screen from "../Screen";

import "./styles.css";

const responseToJson = (response) => response.json();

export default function HomeScreen() {
  // const beers = new Array(20).fill(null).map((_, i) => ({ id: i }));

  const [beers, setBeers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/jeremyzaire/cmybeer-app/beers")
      .then(responseToJson)
      .then((beers) => setBeers(beers));
  }, [setBeers]);

  const hasBeers = beers.length > 0;

  return (
    <Screen>
      {hasBeers ? (
        <Grid container justifyContent="space-between" spacing={4}>
          {beers.map((beer) => (
            <Grid key={beer.id} item>
              <Beer beer={beer} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
}
