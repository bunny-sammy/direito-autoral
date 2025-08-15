import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import '../styles/components/PanCanvas.scss';

interface PanCanvasProps {
  children?: React.ReactNode;
}

export interface PanCanvasRef {
  centerOnElement: (id: string, skip: boolean) => void;
}

export const PanCanvas = forwardRef<PanCanvasRef, PanCanvasProps>(({ children }, ref) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const centerOnElement = (id: string, skipAnimation: boolean) => {
    const targetElement = document.getElementById(id);

    if (!targetElement || !viewportRef.current || !contentRef.current) {
      console.error("Cannot center: A required element is not available.");
      return;
    }

    const viewportRect = viewportRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const viewportCenterX = viewportRect.width / 2;
    const viewportCenterY = viewportRect.height / 2;

    const targetCenterX = targetRect.left - contentRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top - contentRect.top + targetRect.height / 2;

    const newX = viewportCenterX - targetCenterX;
    const newY = viewportCenterY - targetCenterY;

    if (skipAnimation) {
      x.set(newX);
      y.set(newY);
    } else {
      animate(x, newX, { type: 'spring', stiffness: 200, damping: 25 });
      animate(y, newY, { type: 'spring', stiffness: 200, damping: 25 });
    }
  };

  useImperativeHandle(ref, () => ({
    centerOnElement,
  }));

  return (
    <div id="canvas" ref={viewportRef}>
      <motion.div ref={contentRef} drag dragMomentum={true} style={{ x, y, scale }}>
        {children}
      </motion.div>
    </div>
  );
});

export default PanCanvas;
