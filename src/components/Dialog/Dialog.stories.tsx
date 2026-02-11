import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    triggerText: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    triggerText: "Open Dialog",
    title: "Dialog Title",
    description: "This is a dialog description. You can add any content here.",
  },
};

export const WithContent: Story = {
  args: {
    triggerText: "Open Dialog with Content",
    title: "Confirm Action",
    description: "Are you sure you want to proceed?",
    children: (
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    ),
  },
};

export const Simple: Story = {
  args: {
    triggerText: "Simple Dialog",
    title: "Simple Dialog",
  },
};
