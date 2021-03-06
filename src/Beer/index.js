import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { number, string, shape } from "prop-types";
import React from "react";
import { BasketContext } from "../contexts";
import { useSelect } from "../hooks";

export default function Beer({ beer, maxQuantity = 5 }) {
  const { addToBasket } = BasketContext.useContext();
  const [quantity, setQuantity] = useSelect(1);
  const items = new Array(maxQuantity).fill(null);
  const { id, name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }} component="article">
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            labelId="quantity-label"
            value={quantity}
            label="Quantité"
            onChange={setQuantity}
          >
            {items.map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {`${i + 1} bouteille`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="small" onClick={addToBasket(id, quantity)}>
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

Beer.propTypes = {
  beer: shape({
    id: string,
    name: string,
    description: string,
    imageUri: string,
    price: string,
  }),
  maxQuantity: number,
};
