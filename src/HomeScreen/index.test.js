import { screen } from "@testing-library/react";

import { render } from "../testUtils";
import HomeScreen from ".";

describe("HomeScreen", () => {
  it("displays a filter", () => {
    render(<HomeScreen />);

    expect(
      screen.getByRole("button", { name: "Catégorie" })
    ).toBeInTheDocument();
  });

  it.todo("displays a beers list");
});
