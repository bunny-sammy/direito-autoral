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

  const openShare = () => {
    modalRef.current?.open(
      <>
        <div className="bigger-text">
            <img src={`${import.meta.env.BASE_URL}images/qr_code.png`} />
        </div>
      </>
    );
  };

  const openReferences = () => {
    modalRef.current?.open(
      <>
        <div className="bigger-text">
            <h2>Referências</h2>

            <ul>
              <li><a href="https://blog.avctoris.com/glossario/o-que-e-prova-de-autoria" target="_blank">O que é Prova de Autoria? - Blog Avctoris</a></li>
              <li><a href="https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-norma-pl.html" target="_blank">LEI Nº 13.709, DE 14 DE AGOSTO DE 2018 - CÂMARA DOS DEPUTADOS</a></li>
              <li><a href="https://www.icamp.com.br/registro-de-direito-autoral-digital" target="_blank">Registro de Direito Autoral Digital - iCAMP</a></li>
              <li><a href="https://riccipi.com.br/direitos-era-digital" target="_blank">Os Direitos na Era Digital - Ricci PI</a></li>
              <li><a href="https://periodicorease.pro.br/rease/article/download/16680/9267/39822" target="_blank">OS DIREITOS AUTORAIS NA ERA DIGITAL</a></li>
              <li><a href="https://meloadv.adv.br/2024/02/22/direito-autoral-na-era-digital-desafios-e-oportunidades/" target="_blank">Direito Autoral na era digital: desafios e oportunidades - Melo Advogados</a></li>
              <li><a href="https://www.gov.br/pt-br/noticias/viagens-e-turismo/2022/10/registro-de-obras-intelectuais-pode-ser-feito-de-forma-100-on-line" target="_blank">Registro de obras intelectuais pode ser feito de forma 100% on-line — GOV.BR</a></li>
              <li><a href="https://www.thomsonreuters.com.br/pt/juridico/blog/regulacao-ia-brasil-direitos-autorais.html" target="_blank">Regulação da IA no Brasil e os direitos autorais | Thomson Reuters Brasil</a></li>
              <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">L13709 - Planalto</a></li>
              <li><a href="https://www.planalto.gov.br/ccivil_03/leis/l9610.htm" target="_blank">L9610 - Planalto</a></li>
              <li><a href="https://www.wipo.int/edocs/pubdocs/pt/wipo_pub_450_2020.pdf" target="_blank">O que é a propriedade intelectual?</a></li>
              <li><a href="https://www2.ufjf.br/critt/2023/01/30/o-que-e-propriedade-intelectual-e-quais-sao-as-formas-de-protege-la" target="_blank">O que é propriedade intelectual e quais são as formas de protegê-la? – Critt – UFJF</a></li>
              <li><a href="https://www4.ecad.org.br/blog/tudo-o-que-voce-precisa-saber-sobre-dominio-publico" target="_blank">Tudo o que você precisa saber sobre domínio público - Ecad</a></li>
              <li><a href="https://editoratelha.com.br/dominio-publico-entenda-o-que-e-e-qual-o-prazo" target="_blank">Domínio público: entenda o que é e qual o prazo! - Editora Telha</a></li>
              <li><a href="https://jurishand.com/dicionario-juridico/plagio" target="_blank">Plágio - Dicionário Jurídico</a></li>
              <li><a href="https://estadodedireito.com.br/inspiracao-ou-plagio" target="_blank">Inspiração ou plágio? - Estado de Direito</a></li>
            </ul>
        </div>
      </>
    );
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
      <button className="ui-button" onClick={() => openShare()} style={{bottom: '7.85rem', right: '1rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
          <path
            d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"
            fill="#1D398F" 
          />
        </svg>
      </button>
      <button className="ui-button" onClick={() => openReferences()} style={{bottom: '4.5rem', right: '1rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
          <path
            d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"
            fill="#1D398F" 
          />
        </svg>
      </button>
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

          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Plágio vs. Inspiração</h3>
            <p>É uma linha tênue, contudo o que distingue a inspiração do plágio é o “contributo mínimo”, ou seja, um mínimo de criatividade empregada pelo autor em sua obra (nova), de tal maneira que a diferencie de todas as demais</p>
          </Frame>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Plágio vs. Inspiração: Pontos de Discussão</h3>
            <ul>
              <li>Não existe criação feita do nada;</li>
              <li>Possibilidade de coincidências, como invenções iguais feitas no mesmo período sem o conhecimento uma da outra</li>
            </ul>
          </Frame>
          <div></div>
          <div></div>
          <div></div>
          <Frame
              id={`art_5`}
              colspan={2} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Desenho Tradicional',
                author: 'Yashito',
                link: 'https://www.instagram.com/yashito016/'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_5.png`} />
          </Frame>
          <div></div>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Inteligência Artificial e Autoria: LGPD</h3>
            <p>A LGPD estabelece diretrizes fundamentais para o tratamento de dados pessoais, o que impacta diretamente no uso de IA. Mas a falta de uma legislação específica para IA abre brechas para violações da lei de direitos autorais e de proteção de dados.</p>
          </Frame>
          <div></div>
          <div></div>
          
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Domínio Público: O que é</h3>
            <p>Consiste nas obras, que estão livres de direitos de autor, podendo ser reproduzidas, copiadas e consultadas livremente pela população.</p>
          </Frame>
          <Frame
              id={`art_7`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pixel Art',
                author: 'Spartan'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_7.png`} />
          </Frame>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Tipos de Prova de Autoria: Meio Físico</h3>
            <ul>
              <li>Registro em cartório;</li>
              <li>Depósito em órgãos de proteção aos direitos autorais;</li>
              <li>Testemunhas;</li>
              <li>Contrato de produção.</li>
            </ul>
          </Frame>
          <div></div>
          <div></div>
          <Frame
              id={`music_4`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: '"Vazio"',
                desc: 'Música',
                author: 'Mori',
                link: 'https://open.spotify.com/track/3Qz1RIaThWf0rDIB5i76Mu?si=b_HwukedRUeGvbEobki1Xg%0A'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/music_4.png`} />
          </Frame>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3> Leis que regulamentam autoria</h3>
            <li>Lei de direitos Autorais (LDA) 9.610;</li>
            <li>Lei Geral de Proteção de Dados (LGPD) 13.709</li>
            <li>Não há legislação vigente específica para IA</li>
          </Frame>          
          <div></div>

          <Frame
              id={`art_2`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pintura Digital',
                author: 'Lou',
                link: 'https://www.instagram.com/p/DM8ftDVSsIB/'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_2.png`} />
          </Frame>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Domínio Público: Validade</h3>
            <p>De modo geral, entra em domínio público 70 anos após a morte de seu autor (ou do último autor, em caso de parcerias)</p>
          </Frame>
          <div></div>
          <div></div>
          <Frame
              id={`art_4`}
              rowspan={2} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pintura Digital',
                author: 'Guilherme Palacio',
                link: 'https://linktr.ee/guilhermepalacio'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_4.png`} />
          </Frame>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Tipos de Prova de Autoria: Meio Digital</h3>
            <ul>
              <li>Registro em plataformas especializadas;</li>
              <li>Registro na biblioteca nacional, pelo gov.br;</li>
              <li>Utilização de carimbos de tempo;</li>
              <li>Certificação Digital;</li>
            </ul>
          </Frame>
          <div></div>
          <div></div>
          <Frame
              id={`music_1`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: '"(In)Visibilidade"',
                desc: 'Música',
                author: 'Mori',
                link: 'https://open.spotify.com/track/3ALKylEv1DRazd2r5mqerU?si=d9_-ypuqQKSU5DIKmRvgjg'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/music_1.png`} />
          </Frame>
          <div></div>
          <Frame
              id={`music_3`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: '"Praia"',
                desc: 'Música',
                author: 'Mori',
                link: 'https://open.spotify.com/track/3M5kJyfC0Ab0nVvIRvy62i?si=nvP8duoRTCmK3Io3pxVe9g'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/music_3.png`} />
          </Frame>

          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Projeto de Lei n° 2338, de 2023:</h3>
            <p>Visa regulamentar o uso da inteligência artificial no país</p>
          </Frame>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Domínio Público: Prazo de Validade</h3>
            <p>É importante salientar que o prazo se refere apenas aos direitos patrimoniais do autor, não se aplicando aos direitos morais, isto é, a obra pode ser reproduzida, mas não alterada.</p>
          </Frame>
          <Frame id="title" type={1} colspan={3}>
            <h1>A prova de autoria e<br/>o mundo digital</h1>
            <h3>aspectos práticos</h3>
            <br/>
            <h3>Alysson Wanderley, David Coelho e Marcos Costa</h3>
          </Frame>
          <div></div>
          <div></div>
          <div></div>
          <Frame
              id={`art_8`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pixel Art',
                author: 'Spartan'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_8.png`} />
          </Frame>
          
          <div></div>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Consequências da ausência de prova de autoria</h3>
            <p>Além da chance de não receber o devido reconhecimento e remuneração por seu trabalho, o autor pode ser vítima de plágio e violação de propriedade intelectual</p>
          </Frame>
          <div></div>
          <Frame
              id={`music_2`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: '"Lili Elbe"',
                desc: 'Música',
                author: 'Mori',
                link: 'https://open.spotify.com/track/471uHmNtgQjx7WovlZQzzb?si=LIdzZZW6QWiTEwMB9HbD7g'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/music_2.png`} />
          </Frame>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>O que é</h3>
            <p>Mecanismo para atribuir autoria de determinada obra a alguém</p>
          </Frame>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Importância e Obrigatoriedade</h3>
            <p>A prova de autoria não é obrigatória para que os direitos autorais sejam garantidos, contudo a falta dela dificulta o monitoramento e controle de todas as violações potenciais, principalmente em meio digital.</p>
          </Frame>
          <Frame
              id={`art_6`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Desenho Digital',
                author: 'Waulkay',
                link: 'https://www.instagram.com/waulkay_ofc/'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_6.png`} />
          </Frame>
          <div></div>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Ferramentas digitais alternativas que tentam mitigar o problema do rastreamento da origem da obra</h3>
            <ul>
              <li>Carimbos de Tempo;</li>
              <li>Plataformas de Registro Online (CopyrightTechs);</li>
              <li>Blockchain como Prova de Imutabilidade; </li>
              <li>Metadados de Arquivos;</li>
              <li>Marca d’agua em mídias digitais.</li>
            </ul>
          </Frame>
          <div></div>
          <Frame
              id={`art_3`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pintura Tradicional',
                author: 'Guilherme Palacio',
                link: 'https://linktr.ee/guilhermepalacio'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_3.png`} />
          </Frame>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Plágio</h3>
            <p>Apropriação indevida de obra intelectual (literária, artística, científica) de outra pessoa, apresentando-a como se fosse de sua própria autoria sem dar o devido crédito. Violação de direito autoral sujeita a sanções civis e eventualmente penais.</p>
          </Frame>
          <div></div>
          
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Desafios da prova de autoria em meio digital</h3>
            <ul>
              <li>Facilidade de reprodução e disseminação de conteúdo digital;</li>
              <li>Dificuldade de rastrear origem da obra ou de identificar o autor real;</li>
              <li>Velocidade e volume de conteúdo na internet.</li>
            </ul>
          </Frame>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <Frame
              id={`art_8`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pixel Art',
                author: 'Spartan'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_8.png`} />
          </Frame>
          <div></div>
          <div></div>
          <Frame
              id={`art_1`}
              rowspan={1} type={'random'}
              inspect={inspectFrameContent}
              metadata={{
                title: 'Pintura Digital',
                author: 'David Coelho',
                link: 'https://www.instagram.com/p/C20pdj_RIrP/?img_index=2'
              }}
            >
            <img src={`${import.meta.env.BASE_URL}images/art_1.png`} />
          </Frame>
          <div></div>
          <div></div>
          <Frame id={`text_1`} colspan={2} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Inteligência Artificial e Autoria: Dados de Treinamento</h3>
            <p>Faz-se necessário cobrar transparência do processo de treinamento das IAs. Como os modelos generativos de arte são treinados em criações de artistas reais, fica aberta uma discussão se os produtos gerados configuram como plágio.</p>
          </Frame>
          <div></div>
          <Frame id={`text_1`} colspan={1} rowspan={1} type={6} inspect={inspectFrameContent}>
            <h3>Propriedade Intelctual</h3>
            <p>É o conceito relacionado com a proteção legal e reconhecimento de autoria de obra de produção intelectual.</p>
          </Frame>
        </main>
      </PanCanvas>
    </>
  )
}