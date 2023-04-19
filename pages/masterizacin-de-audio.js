import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const MasterizacinDeAudio = (props) => {
  return (
    <>
      <div className="masterizacin-de-audio-container">
        <Head>
          <title>Masterizacin-de-Audio - Basic Productions</title>
          <meta
            property="og:title"
            content="Masterizacin-de-Audio - Basic Productions"
          />
        </Head>
        <div className="masterizacin-de-audio-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name7"></TopImageRow>
          <div className="masterizacin-de-audio-container2 content">
            <h1 className="PageHeading masterizacin-de-audio-text">
              MASTERIZACIÓN
            </h1>
            <div className="masterizacin-de-audio-features">
              <span className="masterizacin-de-audio-text01">
                <span>
                  La masterización se realiza después de que se haya realizado
                  la mezcla y se exporte en una pista estéreo, es el último paso
                  en el proceso de producción. La masterización se ocupa de la
                  ecualización de la canción en su conjunto, donde puede ser
                  necesario enfatizar o reducir ciertas frecuencias de la mezcla
                  final. También se aumenta el volumen general usando compresión
                  multibanda y un limitador. Finalmente, se añade dithering para
                  reducir la tasa de bits a los 16 bits estándar.
                </span>
                <br></br>
                <br></br>
                <span>
                  La masterización esta incluida en nuestro servicio de
                  producción, ya que la consideramos imprescindible. Si vienes
                  de otro estudio o has grabado tus propios temas y necesitas
                  masterizar tu álbum o simplemente una canción, puedes
                  enviárnosla y te la masterizamos, no es necesario ni que
                  vengas al estudio, aunque también puedes hacerlo.
                </span>
                <br></br>
              </span>
              <div className="masterizacin-de-audio-container3">
                <FeatureCard
                  title="Masterización Rápida"
                  description="Consiste en un proceso rápido de ajuste de niveles, compresión multibanda y limitación. Adecuado para demos o maquetas de bajo presupuesto."
                  rootClassName="rootClassName8"
                ></FeatureCard>
                <FeatureCard
                  title="Masterización Profesional"
                  description="Analizamos el tema en todo detalle para balancear la ecualización y que la canción se escuche lo mejor posible en todos los dispositivos. Usando ténicas avanzadas como ecualización dinámica, stereo imaging, ténicas m/s, excitador aural, etc. Dependiendo del tema y sus necesidades."
                  rootClassName="rootClassName9"
                ></FeatureCard>
              </div>
            </div>
            <div className="masterizacin-de-audio-steps">
              <h1 className="masterizacin-de-audio-text07">¿Como Funciona?</h1>
              <div className="masterizacin-de-audio-container4">
                <div className="masterizacin-de-audio-container5">
                  <div className="step">
                    <h1 className="masterizacin-de-audio-text08">
                      <span>1</span>
                    </h1>
                    <h1 className="masterizacin-de-audio-text10">Envío</h1>
                    <span className="masterizacin-de-audio-text11">
                      <span>
                        Nos envías tu canción y nos cuentas las referencias que
                        has usado en la grabación. También puedes decirnos la
                        sonoridad deseada si lo deseas, o dejarlo a nuestro
                        criterio.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step masterizacin-de-audio-step1">
                    <h1 className="masterizacin-de-audio-text14">
                      <span>2</span>
                    </h1>
                    <h1 className="masterizacin-de-audio-text16">Análisis</h1>
                    <span className="masterizacin-de-audio-text17">
                      <span>
                        Analizamos la pista en profundidad para ver sus
                        características, encontrar puntos de mejora, errores,
                        etc. A veces te pediremos que nos vuelvas a enviar la
                        pista con algunas cosas corregidas, si la pista no esta
                        correctamente preparada.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="masterizacin-de-audio-container6">
                  <div className="step masterizacin-de-audio-step2">
                    <h1 className="masterizacin-de-audio-text20">
                      <span>3</span>
                    </h1>
                    <h1 className="masterizacin-de-audio-text22">
                      Masterización
                    </h1>
                    <span className="masterizacin-de-audio-text23">
                      <span>
                        Masterizamos el tema paso a paso. Comenzando por la EQ,
                        después la compresión y finalmente el limitador.
                        Comparamos las versiones y realizamos ajustes hasta
                        encontrar el punto óptimo. Después añadimos effectos
                        extra cuando resulta necesario.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step masterizacin-de-audio-step3">
                    <h1 className="masterizacin-de-audio-text26">
                      <span>4</span>
                    </h1>
                    <h1 className="masterizacin-de-audio-text28">
                      <span>Escucha</span>
                      <br></br>
                    </h1>
                    <span className="masterizacin-de-audio-text31">
                      <span>
                        Exportamos el máster y comprobamos el resultado. Primero
                        en el mismo estudio. En ocasiones, es necesario exportar
                        varias veces hasta encontrar la sonoridad adecuada y un
                        resultado óptimo. Finalmente, se escucha en otros
                        dipositivos y se realizan últimos retoques hasta hacer
                        el render final.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name8"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .masterizacin-de-audio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .masterizacin-de-audio-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .masterizacin-de-audio-container2 {
            gap: 0;
            flex-wrap: wrap;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .masterizacin-de-audio-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .masterizacin-de-audio-text01 {
            text-align: justify;
          }
          .masterizacin-de-audio-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .masterizacin-de-audio-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .masterizacin-de-audio-text07 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .masterizacin-de-audio-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .masterizacin-de-audio-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .masterizacin-de-audio-text08 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .masterizacin-de-audio-text10 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .masterizacin-de-audio-text11 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .masterizacin-de-audio-text14 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .masterizacin-de-audio-text16 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .masterizacin-de-audio-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .masterizacin-de-audio-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .masterizacin-de-audio-text20 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .masterizacin-de-audio-text22 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .masterizacin-de-audio-text23 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .masterizacin-de-audio-text26 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .masterizacin-de-audio-text28 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .masterizacin-de-audio-text31 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          @media (max-width: 1200px) {
            .masterizacin-de-audio-text10 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .masterizacin-de-audio-text16 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .masterizacin-de-audio-text17 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .masterizacin-de-audio-text23 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .masterizacin-de-audio-text28 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .masterizacin-de-audio-text31 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .masterizacin-de-audio-container2 {
              width: 100%;
            }
            .masterizacin-de-audio-text07 {
              text-align: center;
            }
            .masterizacin-de-audio-text08 {
              text-align: center;
            }
            .masterizacin-de-audio-text10 {
              text-align: center;
            }
            .masterizacin-de-audio-text14 {
              text-align: center;
            }
            .masterizacin-de-audio-text16 {
              text-align: center;
            }
            .masterizacin-de-audio-text20 {
              text-align: center;
            }
            .masterizacin-de-audio-text22 {
              text-align: center;
            }
            .masterizacin-de-audio-text26 {
              text-align: center;
            }
            .masterizacin-de-audio-text28 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .masterizacin-de-audio-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .masterizacin-de-audio-container3 {
              grid-template-columns: 1fr;
            }
            .masterizacin-de-audio-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .masterizacin-de-audio-container4 {
              flex-direction: column;
            }
            .masterizacin-de-audio-container5 {
              width: 100%;
            }
            .masterizacin-de-audio-step1 {
              padding: var(--dl-space-space-unit);
            }
            .masterizacin-de-audio-container6 {
              width: 100%;
            }
            .masterizacin-de-audio-step2 {
              padding: var(--dl-space-space-unit);
            }
            .masterizacin-de-audio-step3 {
              padding: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .masterizacin-de-audio-text {
              font-size: 2.5em;
            }
            .masterizacin-de-audio-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .masterizacin-de-audio-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .masterizacin-de-audio-container5 {
              flex-direction: column;
            }
            .masterizacin-de-audio-container6 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default MasterizacinDeAudio
