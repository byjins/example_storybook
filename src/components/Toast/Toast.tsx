import React, { useState, useCallback } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import "./Toast.css";

export interface ToastProviderProps {
  children: React.ReactNode;
  swipeDirection?: "right" | "left" | "up" | "down";
  duration?: number;
  label?: string;
}

export interface ToastProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  type?: "foreground" | "background";
  children: React.ReactNode;
  className?: string;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPause?: () => void;
  onResume?: () => void;
  onSwipeStart?: (event: any) => void;
  onSwipeMove?: (event: any) => void;
  onSwipeEnd?: (event: any) => void;
  onSwipeCancel?: (event: any) => void;
  forceMount?: boolean;
}

export interface ToastTitleProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface ToastDescriptionProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface ToastActionProps {
  altText: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  asChild?: boolean;
}

export interface ToastCloseProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  asChild?: boolean;
}

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  swipeDirection = "right",
  duration = 5000,
  label = "Notifications",
}) => {
  return (
    <ToastPrimitive.Provider
      swipeDirection={swipeDirection}
      duration={duration}
      label={label}
    >
      {children}
      <ToastPrimitive.Viewport className="toast-viewport" />
    </ToastPrimitive.Provider>
  );
};

const ToastRoot: React.FC<ToastProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  duration,
  type = "foreground",
  children,
  className,
  onEscapeKeyDown,
  onPause,
  onResume,
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
  onSwipeCancel,
  forceMount,
}) => {
  return (
    <ToastPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      duration={duration}
      type={type}
      className={className ? `toast ${className}` : "toast"}
      onEscapeKeyDown={onEscapeKeyDown}
      onPause={onPause}
      onResume={onResume}
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      onSwipeCancel={onSwipeCancel}
      forceMount={forceMount}
    >
      {children}
    </ToastPrimitive.Root>
  );
};

const ToastTitle: React.FC<ToastTitleProps> = ({
  children,
  className,
  asChild,
}) => {
  return (
    <ToastPrimitive.Title
      className={className ? `toast-title ${className}` : "toast-title"}
      asChild={asChild}
    >
      {children}
    </ToastPrimitive.Title>
  );
};

const ToastDescription: React.FC<ToastDescriptionProps> = ({
  children,
  className,
  asChild,
}) => {
  return (
    <ToastPrimitive.Description
      className={
        className ? `toast-description ${className}` : "toast-description"
      }
      asChild={asChild}
    >
      {children}
    </ToastPrimitive.Description>
  );
};

const ToastAction: React.FC<ToastActionProps> = ({
  altText,
  children,
  onClick,
  className,
  asChild,
}) => {
  return (
    <ToastPrimitive.Action
      altText={altText}
      onClick={onClick}
      className={className ? `toast-action ${className}` : "toast-action"}
      asChild={asChild}
    >
      {children}
    </ToastPrimitive.Action>
  );
};

const ToastClose: React.FC<ToastCloseProps> = ({
  children,
  className,
  ariaLabel = "Close",
  asChild,
}) => {
  return (
    <ToastPrimitive.Close
      className={className ? `toast-close ${className}` : "toast-close"}
      aria-label={ariaLabel}
      asChild={asChild}
    >
      {children || "×"}
    </ToastPrimitive.Close>
  );
};

const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
};

export default Toast;
