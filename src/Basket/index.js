import { bool, func } from "prop-types";
import { Drawer, Typography } from "@mui/material";
import { List, Title, Total } from "./styles";
import { useBeers } from "../hooks";
import BasketItem from "../BasketItem";
import React from "react";
import Price from "../Price";

const sumPrice = (subTotal, { quantity, price }) => subTotal + quantity + price;

export default function Basket({ open = false, toggle = Function.prototype }) {
  const [basket] = React.useReducer(() => {}, {
    az: 4,
    azazaz: 6,
  });
  const { isLoading, beers } = useBeers();

  const beersInBasket = isLoading
    ? []
    : beers
        .filter(({ id }) => Object.keys(basket).includes(id))
        .map((beer) => ({ ...beer, quantity: basket[beer.id] }));

  const total = beersInBasket.reduce(sumPrice, 0);

  return (
    <Drawer anchor="right" open={open} onClose={toggle}>
      <Title variant="h4" components="h6">
        Mon panier
      </Title>
      <List>
        {beersInBasket.map((beer, i) => (
          <BasketItem
            key={beer.id}
            {...beer}
            divider={i !== beersInBasket.length - 1}
          />
        ))}
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>

        <Typography variant="h5" component="h6">
          <Price value={12.34} />
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  open: bool,
  toggle: func,
};
