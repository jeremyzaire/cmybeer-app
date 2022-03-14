import { bool, node, string } from "prop-types";

import Header from "../Header";

export default function Screen() {
  return <Header />;
}
Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
