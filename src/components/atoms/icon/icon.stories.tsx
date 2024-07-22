import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";
import { myColors } from "../../../constants/colors";
const meta = {
  title: "ui/atoms/Icons",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      options: [
        "fire",
        "car",
        "payment",
        "about",
        "menu",
        "point",
        "logout",
        "person",
        "search",
        "user",
        "car-bg",
        "ubication",
      ],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: "20",
    name: "fire",
    color: myColors.dark,
  },
};
