import { node, string, bool } from "prop-types";

import "./styles.css";
import { StyledTitle, Subtitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <StyledTitle>CMyBeer</StyledTitle>
      <Subtitle isHome={isHome}>{title}</Subtitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propType = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
