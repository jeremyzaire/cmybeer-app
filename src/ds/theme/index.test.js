import theme from "./theme";

describe("theme", () => {
  it("returns a correct setting of values", () => {
    expect(theme).toMatchSnapshot();
  });
});
