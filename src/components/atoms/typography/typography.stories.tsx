import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./typography";

const meta = {
  title: "ui/atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["title", "subtitle", "body", "small", "link"],
      control: { type: "select" },
    },
    family: {
      options: ["medium", "regular", "bold", "semibold"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Este mi mi typography",
    variant: "title",
    family: "medium",
    color: "text-dark"
  },
};

export const Title: Story = {
  args: {
    label: "Este es mi titulo",
    variant: "title",
    family: "medium",
    color: "text-orange-300"
  },
};

export const SubTitle: Story = {
  args: {
    label: "Este es mi subtitulo",
    variant: "subtitle",
    family: "medium",
    color: "text-red-300"
  },
};

export const Body: Story = {
  args: {
    label: "Este es un texto Body",
    variant: "body",
    family: "bold",
    color: "text-dark"
  },
};

export const Small: Story = {
  args: {
    label: "Este es un texto small",
    variant: "small",
    family: "medium",
    color: "text-blue-900"
  },
};

export const Link: Story = {
  args: {
    label: "Este es un texto Link",
    variant: "link",
    family: "medium",
    color: "text-orange-300"
  },
};
