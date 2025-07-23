'use client';
import React, { useEffect } from 'react';
import RegisterForm from './RegisterForm';

export default function RegisterModal({ isOpen, onClose }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors p-2 absolute top-4 right-4 text-xl z-20 bg-white/80 hover:bg-white rounded-full"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Register Form Inside Modal */}
        <div className="h-full">
          <RegisterForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}