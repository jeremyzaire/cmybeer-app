import { Image } from "@mui/icons-material";
import { string } from "prop-types";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BasketItemPrice, {
  types as basketItemPriceTypes,
} from "../BasketItemPrice";

export default function BasketItem({
  name,
  imageUri,
  price,
  quantity,
  divider = true,
}) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={imageUri} alt={name}>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={BasketItemPrice} />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
}

BasketItem.propTypes = {
  name: string,
  divider: Boolean,
  ...basketItemPriceTypes,
};
