import { useState } from 'react'

import './styles/App.scss'
import PanCanvas from './components/PanCanvas'
import Frame from './components/Frame'

export default function App() {
  return (
    <>
      <PanCanvas>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <h1>
            A prova de autoria e<br/>o mundo digital
          </h1>
          <h3>
            aspectos práticos
          </h3>
        </div>
        <Frame id="test-frame">
          Isto<br/>
          é<br/>
          um<br/>
          teste<br/>
                    Isto<br/>
          é<br/>
          um<br/>
          teste<br/>
        </Frame>
      </PanCanvas>
    </>
  )
}