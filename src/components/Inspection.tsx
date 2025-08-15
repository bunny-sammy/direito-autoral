import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/Inspection.scss';

export interface ModalRef {
  open: (content: React.ReactNode) => void;
  close: () => void;
}

export const Inspection = forwardRef<ModalRef, {}>((_props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const open = (newContent: React.ReactNode) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={close}
          className="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Inspection;