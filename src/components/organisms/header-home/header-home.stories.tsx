import type { Meta, StoryObj } from "@storybook/react";
import HeaderHome from "./header-home";

const meta = {
  title: "ui/organisms/HeaderHome",
  component: HeaderHome,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
