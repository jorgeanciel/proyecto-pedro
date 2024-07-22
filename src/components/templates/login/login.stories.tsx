import type { Meta, StoryObj } from "@storybook/react";
import Login from "./login";

const meta = {
  title: "ui/templates/Login",
  component: Login,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
