import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import "./Select.css";

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export interface SelectItemProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface SelectGroupProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

const SelectRoot: React.FC<SelectProps> = ({
  value,
  defaultValue,
  onValueChange,
  placeholder,
  disabled,
  required,
  name,
  open,
  defaultOpen,
  onOpenChange,
  children,
  className,
}) => {
  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
      name={name}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </SelectPrimitive.Root>
  );
};

const SelectTrigger: React.FC<{
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}> = ({ children, className, asChild }) => {
  return (
    <SelectPrimitive.Trigger
      className={className ? `select-trigger ${className}` : "select-trigger"}
      asChild={asChild}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
};

const SelectValue: React.FC<{
  placeholder?: string;
  className?: string;
}> = ({ placeholder, className }) => {
  return (
    <SelectPrimitive.Value
      placeholder={placeholder}
      className={className ? `select-value ${className}` : "select-value"}
    />
  );
};

const SelectIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <SelectPrimitive.Icon
      className={className ? `select-icon ${className}` : "select-icon"}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6425 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </SelectPrimitive.Icon>
  );
};

const SelectPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SelectPrimitive.Portal>{children}</SelectPrimitive.Portal>;
};

const SelectContent: React.FC<{
  children: React.ReactNode;
  className?: string;
  position?: "item-aligned" | "popper";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
}> = ({
  children,
  className,
  position = "popper",
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  avoidCollisions = true,
}) => {
  return (
    <SelectPrimitive.Content
      className={className ? `select-content ${className}` : "select-content"}
      position={position}
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
    >
      {children}
    </SelectPrimitive.Content>
  );
};

const SelectViewport: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <SelectPrimitive.Viewport
      className={className ? `select-viewport ${className}` : "select-viewport"}
    >
      {children}
    </SelectPrimitive.Viewport>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  disabled,
  children,
  className,
}) => {
  return (
    <SelectPrimitive.Item
      value={value}
      disabled={disabled}
      className={className ? `select-item ${className}` : "select-item"}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="select-item-indicator">
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
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

const SelectGroup: React.FC<SelectGroupProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <SelectPrimitive.Group
      className={className ? `select-group ${className}` : "select-group"}
    >
      {label && (
        <SelectPrimitive.Label className="select-label">
          {label}
        </SelectPrimitive.Label>
      )}
      {children}
    </SelectPrimitive.Group>
  );
};

const SelectSeparator: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <SelectPrimitive.Separator
      className={
        className ? `select-separator ${className}` : "select-separator"
      }
    />
  );
};

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Content: SelectContent,
  Viewport: SelectViewport,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
};

export default Select;
