import NavBar from "../components/NavigationBar/NavigationBar";

export default {
  title: "Navigation Bar",
  component: NavBar,
};

const Template = (args) => <NavBar />;

export const Sample = Template.bind({});
Sample.args = {
  messageType: "Twoway",
  accountId: "271759e9-ca4f-4835-be61-0fe38d051559",
  groupId: "7d96195b-be5b-4bde-ac3c-be6d11a7c695",
  sbtOrgunitId: "239012ad-6ac4-4883-a93c-cb4d57d846bf",
  subscriberNo: "14696667510",
};
