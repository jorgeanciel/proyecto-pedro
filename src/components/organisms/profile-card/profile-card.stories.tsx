import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./profile-card";

const meta = {
  title: "ui/organisms/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
