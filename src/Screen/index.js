import { node, string, bool } from "prop-types";
import clsx from "clsx";

import "./styles.css";
import { Title, Subtitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  // first option
  //   const subtitleClass = [`subtitle ${isHome && "homeSubtitle"}`];
  const subtitleClass = clsx("subtitle", { homeSubtitle: isHome });

  return (
    <>
      <Title>CMyBeer</Title>
      {/* <h2 className={subtitleClass}>{title}</h2> */}
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
