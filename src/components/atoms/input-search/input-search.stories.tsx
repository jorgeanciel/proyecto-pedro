import type { Meta, StoryObj } from "@storybook/react";
import InputSearch from "./input-search";
const meta = {
  title: "ui/atoms/InputSearch",
  component: InputSearch,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    value: "bebidas . . . ",
    onChange: (value) => {
      console.log(value);
    },
    expanded: false,
  },
};
