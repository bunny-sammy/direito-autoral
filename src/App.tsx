import { useRef, useEffect } from 'react'

import { PanCanvas } from './components/PanCanvas'
import type { PanCanvasRef } from './components/PanCanvas';

import { Inspection } from './components/Inspection'
import type { ModalRef } from './components/Inspection';

import Frame from './components/Frame'
import './styles/App.scss'

export default function App() {
  const modalRef = useRef<ModalRef>(null);
  const canvasRef = useRef<PanCanvasRef>(null);

  const inspectFrameContent = (content: React.ReactNode) => {
    modalRef.current?.open(content);
  };

  const centerOnElement = (id: string, skip: boolean=false) => {
    if (canvasRef.current) {
      canvasRef.current.centerOnElement(id, skip);
    }
  };

  useEffect(() => {
    centerOnElement('title', true);
  }, [])

  return (
    <>
      <Inspection ref={modalRef} />
      <div className="vignette" />
      <button className="ui-button" onClick={() => centerOnElement('title')} style={{bottom: '1rem', right: '1rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
          <path 
            d="M17 12C17 7.55 11.62 5.31 8.46 8.46C5.31 11.61 7.55 17 12 17C14.76 17 17 14.76 17 12M12 15C9.33 15 8 11.77 9.88 9.88C11.77 8 15 9.33 15 12C15 13.66 13.66 15 12 15M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19" 
            fill="#1D398F" 
          />
        </svg>
      </button>



      <PanCanvas ref={canvasRef}>
        <main className="wall-grid">
          <Frame id="title" type={1}>
            <h1>
              A prova de autoria e<br/>o mundo digital
            </h1>
            <h3>
              aspectos práticos
            </h3>
          </Frame>

          <Frame
              id={`art_1`}
              rowspan={2} type={3}
              inspect={inspectFrameContent}
              metadata={{
                desc: 'Pintura Digital',
                author: 'David Coelho',
                link: 'https://www.instagram.com/p/C20pdj_RIrP/?img_index=2'
              }}
            >
            <img src="/images/art_1.png" />
          </Frame>

          {Array.from({ length: 2500 }).map((_, i) => {
            const type = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            const span = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

            return (
              <Frame key={i}
                id={`${i}`}
                colspan={span} type={type}
                inspect={inspectFrameContent}
              >
                Teste
              </Frame>
            )
          })}          
        </main>
      </PanCanvas>
    </>
  )
}