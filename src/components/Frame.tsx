import React from 'react';
import '../styles/components/Frame.scss'

type Metadata = {
    title: string,
    desc?: string,
    author: string,
    link?: string,
}

interface FrameProps {
    id: string;
    metadata?: Metadata;
    type?: 'random' | number | null;
    colspan?: number;
    rowspan?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;

    inspect?: (content: React.ReactNode) => void;
}

export default function Frame({ id, metadata=undefined, type=null, colspan=1, rowspan=1, style, children, inspect }: FrameProps) {
    if (type == 'random') {
        type = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    }
    
    const handleClick = () => {
        if (!inspect) return;
        let output;

        if (type == 6) {
            output = (
                <div className="bigger-text">
                    {children}
                </div>
            )
        } else {
            output = <>
                {children}
                {metadata &&
                    <div className="plaque">
                        <h2>
                            <b>{metadata.title}</b>
                        </h2>
                        {metadata.desc &&
                            <p>{metadata.desc}</p>}
                        <p>Criador (a): <b>{metadata.author}</b></p>
                        <br/>
                        {metadata.link && <a href={metadata.link} target="_blank" rel="noopener noreferrer"
                            style={{display: 'flex', alignItems: 'center', gap: '0.15rem'}}>
                            Acessar
                            <svg width="12" height="12" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_63_2)">
                                <path d="M76 76H20V20H48V12H20C15.56 12 12 15.6 12 20V76C12 80.4 15.56 84 20 84H76C80.4 84 84 80.4 84 76V48H76V76ZM56 12V20H70.36L31.04 59.32L36.68 64.96L76 25.64V40H84V12H56Z" fill="currentColor"/>
                                </g>
                            </svg>
                        </a>}
                    </div>
                }
            </>
        }

        inspect(output);
    }

    const Content = () => (
        <div id={id} className="frame" frame-type={type} onDoubleClick={handleClick}
            style={{
                ...style,
                gridColumn: `span ${colspan}`,
                gridRow: `span ${rowspan}`,
            }}
        >
            {children}
        </div>
    )

    return (
        <Content />
    );
}