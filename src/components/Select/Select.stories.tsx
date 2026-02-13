import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select.Root> = {
  title: "Components/Select",
  component: Select.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="grape">Grape</Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState("banana");

    return (
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="grape">Grape</Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit or vegetable" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Group label="Fruits">
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana">Banana</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group label="Vegetables">
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="broccoli">Broccoli</Select.Item>
                <Select.Item value="spinach">Spinach</Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select.Root value={value} onValueChange={setValue} disabled>
        <Select.Trigger>
          <Select.Value placeholder="Disabled select" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};

export const WithDisabledItem: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana" disabled>
                Banana (Disabled)
              </Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  },
};
