import { Meta, StoryObj } from "@storybook/react";

import { AboutClient } from "./about";

const meta: Meta<typeof AboutClient> = {
  component: AboutClient,
};
export default meta;

type Story = StoryObj<typeof AboutClient>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: "/about",
      },
    },
  },
};
