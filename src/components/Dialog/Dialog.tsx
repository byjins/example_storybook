import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "./Dialog.css";

export interface DialogProps {
  triggerText?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  triggerText = "Open Dialog",
  title,
  description,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger className="dialog-trigger">
        {triggerText}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dialog-overlay" />
        <DialogPrimitive.Content className="dialog-content">
          <DialogPrimitive.Title className="dialog-title">
            {title}
          </DialogPrimitive.Title>
          {description && (
            <DialogPrimitive.Description className="dialog-description">
              {description}
            </DialogPrimitive.Description>
          )}
          {children}
          <DialogPrimitive.Close className="dialog-close" aria-label="Close">
            ×
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
