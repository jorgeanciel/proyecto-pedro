import React from "react";
import Icon from "../icon/icon";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  showClose?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  className,
  onClose,
  showClose,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 flex z-10 items-center justify-center ${className}`}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white rounded-lg p-6 z-10 relative">
            {showClose && (
              <Icon
                name="close"
                onClick={onClose}
                className="cursor-pointer absolute top-2 right-2"
              />
            )}

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
