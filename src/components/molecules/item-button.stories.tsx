import type { Meta, StoryObj } from "@storybook/react";
import ItemButton from "./item-button";

const meta = {
  title: "ui/molecules/ItemButton",
  component: ItemButton,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: "Add",
    textLabel: "$27.00",
  },
};
