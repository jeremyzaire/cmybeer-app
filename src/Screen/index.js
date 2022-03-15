import { Box } from "@mui/system";
import { node } from "prop-types";

import Header from "../Header";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      <Box components="main" sx={{ padding: "32px" }}>
        {children}
      </Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
