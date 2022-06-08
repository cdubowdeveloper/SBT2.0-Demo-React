import Portal from "../components/Portal";

export default {
  title: "Portal",
  component: Portal,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Portal {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  label: "Welcome SBT Client",
  accountId: "271759e9-ca4f-4835-be61-0fe38d051559",
  groupId: "7d96195b-be5b-4bde-ac3c-be6d11a7c695",
  orgunitId: "239012ad-6ac4-4883-a93c-cb4d57d846bf",
  theme: "light",
};
