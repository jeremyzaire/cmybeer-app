import React from "react";

const responseToJson = (response) => response.json();

export default function useBeers(defaultBeers = []) {
  const [beers, setBeers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/jeremyzaire/cmybeer-app/beers")
      .then(responseToJson)
      .then((beers) => setBeers(beers));
  }, [setBeers]);

  return [beers];
}
