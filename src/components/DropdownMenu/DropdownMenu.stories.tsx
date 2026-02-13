import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "./DropdownMenu";
import Button from "../Button/Button";

const meta: Meta<typeof DropdownMenu.Root> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu.Root>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">Open Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={() => alert("Edit clicked")}>
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={() => alert("Duplicate clicked")}>
              Duplicate
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onSelect={() => alert("Archive clicked")}>
              Archive
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onSelect={() => alert("Delete clicked")}
              disabled
            >
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const OpenByDefault: Story = {
  render: () => (
    <DropdownMenu.Root defaultOpen={true}>
      <DropdownMenu.Trigger asChild>
        <Button variant="primary">Menu (Open)</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={() => alert("Edit clicked")}>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => alert("Duplicate clicked")}>
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item onSelect={() => alert("Archive clicked")}>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => alert("Delete clicked")} disabled>
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const WithShortcuts: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">Open Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘ E" onSelect={() => alert("Edit")}>
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item
              shortcut="⌘ D"
              onSelect={() => alert("Duplicate")}
            >
              Duplicate
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N" onSelect={() => alert("Archive")}>
              Archive
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">Open Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Group>
              <DropdownMenu.Label>File</DropdownMenu.Label>
              <DropdownMenu.Item>New File</DropdownMenu.Item>
              <DropdownMenu.Item>Open File</DropdownMenu.Item>
              <DropdownMenu.Item>Save</DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Label>Edit</DropdownMenu.Label>
              <DropdownMenu.Item>Cut</DropdownMenu.Item>
              <DropdownMenu.Item>Copy</DropdownMenu.Item>
              <DropdownMenu.Item>Paste</DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">View Options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label>View</DropdownMenu.Label>
            <DropdownMenu.CheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Status Bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Activity Bar
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Panel
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState("bottom");

    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="primary">Position: {position}</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
            <DropdownMenu.RadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="bottom">
                Bottom
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="right">
                Right
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};
