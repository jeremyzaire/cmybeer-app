import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import Beer from "../Beer";
import Screen from "../Screen";
import useBeers from "../hooks/useBeers";

import "./styles.css";

export default function HomeScreen() {
  const { isLoading, error, beers } = useBeers();

  if (isLoading)
    return (
      <Screen>
        <CircularProgress />
      </Screen>
    );

  if (error) {
    console.log("Bug n°1234");
    return "Pas de résultat. Réessayer plus tard";
  }

  return (
    <Screen>
      <Grid container justifyContent="space-between" spacing={4}>
        {beers.map((beer) => (
          <Grid key={beer.id} item>
            <Beer beer={beer} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
