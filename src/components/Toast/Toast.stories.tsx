import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import Button from "../Button/Button";

const meta: Meta<typeof Toast.Provider> = {
  title: "Components/Toast",
  component: Toast.Provider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast.Provider>;

const ToastDemo: React.FC<{
  title?: string;
  description?: string;
  actionText?: string;
  type?: "foreground" | "background";
}> = ({
  title = "Toast Title",
  description,
  actionText,
  type = "foreground",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <Button
        variant="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Show Toast
      </Button>
      <Toast.Root open={open} onOpenChange={setOpen} type={type}>
        <Toast.Title>{title}</Toast.Title>
        {description && <Toast.Description>{description}</Toast.Description>}
        {actionText && (
          <Toast.Action
            altText="Action"
            onClick={() => alert("Action clicked")}
          >
            {actionText}
          </Toast.Action>
        )}
        <Toast.Close />
      </Toast.Root>
    </Toast.Provider>
  );
};

export const Default: Story = {
  render: () => (
    <ToastDemo
      title="Toast Title"
      description="This is a toast notification message."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      title="Toast with Action"
      description="This toast has an action button."
      actionText="Undo"
    />
  ),
};

export const Simple: Story = {
  render: () => <ToastDemo title="Simple Toast" />,
};

export const BackgroundType: Story = {
  render: () => (
    <ToastDemo
      title="Background Toast"
      description="This is a background type toast."
      type="background"
    />
  ),
};

export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<
      Array<{ id: number; title: string; description?: string }>
    >([]);

    const addToast = () => {
      const id = Date.now();
      setToasts([
        ...toasts,
        {
          id,
          title: `Toast ${toasts.length + 1}`,
          description: "This is a toast notification.",
        },
      ]);
    };

    const removeToast = (id: number) => {
      setToasts(toasts.filter((t) => t.id !== id));
    };

    return (
      <Toast.Provider>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Button variant="primary" onClick={addToast}>
            Add Toast
          </Button>
          {toasts.map((toast) => (
            <Toast.Root
              key={toast.id}
              open={true}
              onOpenChange={(open) => {
                if (!open) {
                  removeToast(toast.id);
                }
              }}
            >
              <Toast.Title>{toast.title}</Toast.Title>
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
              <Toast.Close />
            </Toast.Root>
          ))}
        </div>
      </Toast.Provider>
    );
  },
};
