import type { Meta, StoryObj } from "@storybook/react";
import HomeTemplate from "./home-template";

const meta = {
  title: "ui/templates/HomeTemplate",
  component: HomeTemplate,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
  },
};
