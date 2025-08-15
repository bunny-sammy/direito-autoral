import React, { useCallback, useRef, useEffect } from "react"; // 1. Import useEffect
import {
    TransformWrapper,
    TransformComponent,
    type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import '../styles/components/PanCanvas.scss';

interface CanvasProps {
    children?: React.ReactNode;
}

export default function PanCanvas({ children }: CanvasProps) {
    const transformRef = useRef<ReactZoomPanPinchRef | null>(null);

    // 1. Modify the function to accept the library instance as its first argument.
    const panToElement = useCallback((
        instance: ReactZoomPanPinchRef | null,
        id: string,
        scale?: number,
        animationTime = 600
    ) => {
        // Now we use the instance passed directly to the function.
        if (!instance) return;

        const targetScale = scale ?? instance.state.scale;
        
        instance.zoomToElement(id, targetScale, animationTime, "easeOut");
    }, []);

    return (
        <TransformWrapper
            ref={transformRef}
            minScale={0.5}
            initialScale={0.75}
            maxScale={2}
            limitToBounds={false}
            centerOnInit={false}
            smooth={true}
            doubleClick={{ disabled: true }}
            // 2. Use onInit and pass its instance argument directly to our function.
            // This is the library's guarantee that the instance is ready.
            onInit={(instance) => panToElement(instance, '113')}
        >
            <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{ width: "5000px", height: "5000px" }}
            >
                <div id="canvas">
                    {children}
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
}