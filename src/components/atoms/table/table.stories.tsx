import type { Meta, StoryObj } from "@storybook/react";
import Table from "./table";
const meta = {
  title: "ui/atoms/Table",
  component: Table,
  parameters: {
    layout: "full",
  },
  argTypes: {
    status: {
      options: ["ACTIVE", "PENDING"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    status: "ACTIVE",
    label: "Table",
  },
};
