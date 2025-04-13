import React, { ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
