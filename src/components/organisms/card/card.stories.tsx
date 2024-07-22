import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta = {
  title: "ui/organisms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Asian Poke',
    body: 'Japanese rice, lightly salted salmon, fresh radish, soybean, picked onion, avocado',
    footer: '$27.00'
  },
};
