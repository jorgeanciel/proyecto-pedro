import type { Meta, StoryObj } from "@storybook/react";
import AvatarProfile from "./avatar-profile";

const meta = {
  title: "ui/atoms/AvatarProfile",
  component: AvatarProfile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarProfile>;

export default meta;
type Story = StoryObj<typeof meta>;
const image = "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"


export const SmallAvatar: Story = {
  args: {
    image,
    size: "small",
  },
};

export const MediumAvatar: Story = {
  args: {
    image,
    size: "medium",
  },
};

export const LargeAvatar: Story = {
  args: {
    image,
    size: "large",
  },
};
