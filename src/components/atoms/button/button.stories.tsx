import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
  title: "ui/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const White: Story = {
  args: {
    label: "Button",
    theme: "white",
  },
};
export const Primary: Story = {
  args: {
    label: "Button",
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    theme: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button Disabled",
    theme: "secondary",
    disabled: true,
  },
};
export const Expanded: Story = {
  args: {
    label: "Button Expanded",
    theme: "primary",
    expanded: true,
  },
  parameters: {
    layout: "fullscreen",
  },
};
export const Outlined: Story = {
  args: {
    label: "Button Outlined",
    theme: "primary",
    outlined: true,
    disabled: false,
  },
};
