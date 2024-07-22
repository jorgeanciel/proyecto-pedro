import type { Meta, StoryObj } from "@storybook/react";
import Table from "./table";

const meta = {
  title: "ui/molecules/Table",
  component: Table,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
