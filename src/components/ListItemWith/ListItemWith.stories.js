import { ListItemWith } from ".";

export default {
  title: "Components/ListItemWith",
  component: ListItemWith,
  argTypes: {
    with1: {
      options: ["flag", "icon"],
      control: { type: "select" },
    },
    size: {
      options: ["m", "s"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    flag: true,
    icon: true,
    text: "Item Name",
    with1: "flag",
    size: "m",
    className: {},
    iconJamIconsOutlineLogosCheckColor: "#16A34A",
    textClassName: {},
  },
};
