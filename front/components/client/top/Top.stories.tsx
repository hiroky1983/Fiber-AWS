import { Meta, StoryObj } from "@storybook/react";

import { TopClient } from ".";

const meta: Meta<typeof TopClient> = {
  component: TopClient,
};
export default meta;

type Story = StoryObj<typeof TopClient>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: "/",
      },
    },
  },
};
