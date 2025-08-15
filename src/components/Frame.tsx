import React from 'react';
import '../styles/components/Frame.scss'

interface FrameProps {
    id: string;
    type?: number | null;

    colspan?: number;
    rowspan?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Frame({ id, type=null, colspan=1, rowspan=1, style, children }: FrameProps) {
    return (
        <div id={id} className="frame" frame-type={type}
            style={{
                ...style,
                gridColumn: `span ${colspan}`,
                gridRow: `span ${rowspan}`,
            }}
        >
            {children}
        </div>
    );
}