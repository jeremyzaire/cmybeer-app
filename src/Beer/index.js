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
import { useSelect } from "../hooks";

export default function Beer({ beer, maxQuantity = 5 }) {
  const [quantity, setQuantity] = useSelect(1);

  const items = new Array(maxQuantity).fill(null);

  const { name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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

        <Button size="small">Ajouter</Button>
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
