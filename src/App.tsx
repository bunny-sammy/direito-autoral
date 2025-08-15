import { useState } from 'react'

import PanCanvas from './components/PanCanvas'
import Frame from './components/Frame'
import './styles/App.scss'

export default function App() {
  return (
    <>
      <div className="vignette" />
      <PanCanvas>
        <main className="wall-grid">
          <Frame id="title" type={1}>
            <h1>
              A prova de autoria e<br/>o mundo digital
            </h1>
            <h3>
              aspectos práticos
            </h3>
          </Frame>

          {Array.from({ length: 2500 }).map((_, i) => {
            const type = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

            return (
              <Frame key={i} id={`${i}`} type={type}>
                Testando tamanhos!!!
              </Frame>
            )
          })}          
        </main>
      </PanCanvas>
    </>
  )
}