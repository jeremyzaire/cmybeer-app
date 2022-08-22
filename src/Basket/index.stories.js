import Basket from ".";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Basket"),
  component: Basket,
};

const Template = (args) => <Basket open {...args} />;

export const Default = Template.bind({});
