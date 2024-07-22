import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./avatar";

const meta = {
  title: "ui/atoms/Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallAvatar: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/943449226/es/foto/concepto-promocional-flyer-y-cartel-para-restaurantes-o-pizzer%C3%ADas-plantilla-con-pizza-de.jpg?s=612x612&w=0&k=20&c=SKTA42IP3L-MSEgHIAFx9JBZMJ4V_695Ba1vDTk8hsk=",
    size: "small",
  },
};

export const MediumAvatar: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/943449226/es/foto/concepto-promocional-flyer-y-cartel-para-restaurantes-o-pizzer%C3%ADas-plantilla-con-pizza-de.jpg?s=612x612&w=0&k=20&c=SKTA42IP3L-MSEgHIAFx9JBZMJ4V_695Ba1vDTk8hsk=",
    size: "medium",
  },
};

export const LargeAvatar: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/943449226/es/foto/concepto-promocional-flyer-y-cartel-para-restaurantes-o-pizzer%C3%ADas-plantilla-con-pizza-de.jpg?s=612x612&w=0&k=20&c=SKTA42IP3L-MSEgHIAFx9JBZMJ4V_695Ba1vDTk8hsk=",
    size: "large",
  },
};
