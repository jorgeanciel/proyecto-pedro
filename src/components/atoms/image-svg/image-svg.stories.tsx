import type { Meta, StoryObj } from "@storybook/react";
import PersonImage from "./person";
const meta = {
  title: "ui/atoms/person",
  component: PersonImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PersonImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {},
};
