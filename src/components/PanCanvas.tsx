import React from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import '../styles/components/PanCanvas.scss'

interface CanvasProps {
    children?: React.ReactNode;
}

export default function PanCanvas({ children }: CanvasProps) {   
    return (
        <TransformWrapper>
            <TransformComponent>
                <div id="canvas">
                    {children}
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
}