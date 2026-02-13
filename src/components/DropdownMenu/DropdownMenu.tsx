import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./DropdownMenu.css";

export interface DropdownMenuProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: "ltr" | "rtl";
  className?: string;
}

export interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null | Array<Element | null>;
  collisionPadding?:
    | number
    | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
  arrowPadding?: number;
  sticky?: "partial" | "always";
  hideWhenDetached?: boolean;
  loop?: boolean;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: Event) => void;
  onFocusOutside?: (event: Event) => void;
  onInteractOutside?: (event: Event) => void;
}

export interface DropdownMenuItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  className?: string;
  shortcut?: string;
}

export interface DropdownMenuGroupProps {
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuCheckboxItemProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  className?: string;
  shortcut?: string;
}

export interface DropdownMenuRadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuRadioItemProps {
  value: string;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  children: React.ReactNode;
  className?: string;
}

const DropdownMenuRoot: React.FC<DropdownMenuProps> = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
  dir,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
      dir={dir}
    >
      {children}
    </DropdownMenuPrimitive.Root>
  );
};

const DropdownMenuTrigger: React.FC<{
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}> = ({ children, className, asChild }) => {
  return (
    <DropdownMenuPrimitive.Trigger
      className={
        className
          ? `dropdown-menu-trigger ${className}`
          : "dropdown-menu-trigger"
      }
      asChild={asChild}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
};

const DropdownMenuPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DropdownMenuPrimitive.Portal>{children}</DropdownMenuPrimitive.Portal>
  );
};

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  avoidCollisions = true,
  collisionBoundary,
  collisionPadding = 0,
  arrowPadding = 0,
  sticky = "partial",
  hideWhenDetached = false,
  loop = false,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
}) => {
  return (
    <DropdownMenuPrimitive.Content
      className={
        className
          ? `dropdown-menu-content ${className}`
          : "dropdown-menu-content"
      }
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      loop={loop}
      onEscapeKeyDown={onEscapeKeyDown}
      onPointerDownOutside={onPointerDownOutside}
      onFocusOutside={onFocusOutside}
      onInteractOutside={onInteractOutside}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
  shortcut,
}) => {
  return (
    <DropdownMenuPrimitive.Item
      className={
        className ? `dropdown-menu-item ${className}` : "dropdown-menu-item"
      }
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
      {shortcut && (
        <span className="dropdown-menu-item-shortcut">{shortcut}</span>
      )}
    </DropdownMenuPrimitive.Item>
  );
};

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({
  children,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.Group
      className={
        className ? `dropdown-menu-group ${className}` : "dropdown-menu-group"
      }
    >
      {children}
    </DropdownMenuPrimitive.Group>
  );
};

const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({
  children,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.Label
      className={
        className ? `dropdown-menu-label ${className}` : "dropdown-menu-label"
      }
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
};

const DropdownMenuSeparator: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={
        className
          ? `dropdown-menu-separator ${className}`
          : "dropdown-menu-separator"
      }
    />
  );
};

const DropdownMenuCheckboxItem: React.FC<DropdownMenuCheckboxItemProps> = ({
  children,
  checked,
  onCheckedChange,
  disabled,
  onSelect,
  className,
  shortcut,
}) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={
        className
          ? `dropdown-menu-checkbox-item ${className}`
          : "dropdown-menu-checkbox-item"
      }
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      onSelect={onSelect}
    >
      <DropdownMenuPrimitive.ItemIndicator className="dropdown-menu-item-indicator">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
      {shortcut && (
        <span className="dropdown-menu-item-shortcut">{shortcut}</span>
      )}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({
  value,
  onValueChange,
  children,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      value={value}
      onValueChange={onValueChange}
      className={
        className
          ? `dropdown-menu-radio-group ${className}`
          : "dropdown-menu-radio-group"
      }
    >
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
};

const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({
  value,
  disabled,
  onSelect,
  children,
  className,
}) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      value={value}
      disabled={disabled}
      onSelect={onSelect}
      className={
        className
          ? `dropdown-menu-radio-item ${className}`
          : "dropdown-menu-radio-item"
      }
    >
      <DropdownMenuPrimitive.ItemIndicator className="dropdown-menu-item-indicator">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7.5" cy="7.5" r="3" fill="currentColor" />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
};

export default DropdownMenu;
