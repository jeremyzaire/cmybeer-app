import styled from "styled-components";
import Title from "../Title";

export const StyledTitle = styled(Title)`
  color: lightcoral;
`;

export const Subtitle = styled.h2`
  color: ${({ isHome }) => (isHome ? "lightskyblue" : "lightseagreen")};
  text-decoration: underline;
`;
