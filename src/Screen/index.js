import { node } from "prop-types";
import Basket from "../Basket";
import { useToggle } from "react-use";

import Header from "../Header";
import { Box } from "./styles";

export default function Screen({ children }) {
  const [open, toggle] = useToggle(true);

  return (
    <>
      <Header onToggleBasket={toggle} />
      <Basket open={open} toggle={toggle} />
      <Box components="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
