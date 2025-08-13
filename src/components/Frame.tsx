import React from 'react';
import '../styles/components/Frame.scss'

interface FrameProps {
    id: string;

    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Frame({ id, style, children }: FrameProps) {
    return (
        <div id={id} className="frame" style={style}>
            {children}
        </div>
    );
}