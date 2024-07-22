import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./menu";

const meta = {
  title: "ui/organisms/Menu",
  component: Menu,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuList: [
      { icon: "menu", label: "Menu", color: "danger-light", showBorder: true },
      { icon: "car", label: "Delivery", color: "primary", showBorder: false },
      {
        icon: "payment",
        label: "Payment",
        color: "secondary",
        showBorder: false,
      },
      { icon: "about", label: "About", color: "gray-4", showBorder: false },
    ],
  },
};
