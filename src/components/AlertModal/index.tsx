import React, { useEffect, useRef } from "react";
import "./style.css"; // Add styles as necessary

interface AccessibleAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const AlertModal: React.FC<AccessibleAlertProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null); // Ref to store the last focused element

  // Save the last focused element before opening the modal
  useEffect(() => {
    if (isOpen) {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();

      // Focus trap: keep focus within the modal
      const handleTabKey = (e: KeyboardEvent) => {
        const focusableElements = dialogRef.current?.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const firstElement = focusableElements?.[0] as HTMLElement;
        const lastElement = focusableElements?.[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.key === "Tab") {
          if (e.shiftKey) {
            // If Shift + Tab is pressed
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            // If Tab is pressed
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      // Clean up: remove the focus trap listener and restore focus to the last element
      return () => {
        document.removeEventListener("keydown", handleTabKey);

        if (lastFocusedElementRef.current) {
          // Blur the button to prevent accidental retrigger on pressing Enter
          lastFocusedElementRef.current.blur();

          // Delay focus restoration to prevent Enter keypress from triggering button click
          setTimeout(() => {
            lastFocusedElementRef.current?.focus();
          }, 0);
        }
      };
    }
  }, [isOpen]);

  // Handle ESC or ENTER key to close the modal
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape" || e.key === "Enter") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onKeyDown={handleKeyDown}
      tabIndex={-1} // Ensure the overlay itself is focusable
    >
      <div
        className="modal-content"
        ref={dialogRef}
        tabIndex={-1} // Focus on modal when opened
      >
        <h2 id="modal-title">{title}</h2>
        <p id="modal-description">{message}</p>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close alert dialog"
        >
          Close
        </button>
      </div>
    </div>
  );
};
