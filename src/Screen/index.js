import { node, string, bool } from "prop-types";

import "./styles.css";
import { Typography } from "@mui/material";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Typography variant="h1">CMyBeer</Typography>
      <Typography variant="h2">{title}</Typography>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propType = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
