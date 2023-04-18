import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const Grupos = (props) => {
  return (
    <>
      <div className="grupos-container">
        <Head>
          <title>Grupos - Basic Productions</title>
          <meta property="og:title" content="Grupos - Basic Productions" />
        </Head>
        <div className="grupos-container1 mainContainer">
          <TopImageRow></TopImageRow>
          <div className="grupos-container2 content">
            <h1 className="grupos-text PageHeading">GRUPOS</h1>
            <div className="grupos-features">
              <span className="grupos-text01">
                <span>
                  Dale a tu grupo la mejor producción posible a un precio
                  inmejorable. Disponemos de equipo de primer nivel e
                  instrumentos de primeras marcas como Gibson, Fender, Yamaha,
                  etc.
                </span>
                <br></br>
                <br></br>
                <span>
                  Podreis disfrutar de todos nuestros instrumentos y equipo sin
                  coste adicional. Entre ellos una Gibson les paul supreme,
                  Gibson J-200, una Fender american strato, Fender Precission
                  Bass.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  La grabaciones se realizan siempre por pistas separadas, en un
                  ambiente completamente acondicionado e insonorizado.
                  Disponemos de dos salas de grabación y una sala de mezclas
                  LEDE.
                </span>
              </span>
              <div className="grupos-container3">
                <FeatureCard
                  title="Maquetación"
                  description="Si buscais plasmar vuestra música para daros a conocer y no quereis pagar mucho por ello, esta es vuestra opción.  Incluye 5 horas de grabación, en una única sesión, mezcla y masterización."
                  rootClassName="rootClassName4"
                ></FeatureCard>
                <FeatureCard
                  title="Producción Musical"
                  description="La elección adecuada si queréis obtener el mejor acabado, con más tiempo para vuestra producción, ayudas en composición y letras, mejora de la armonia, de la melodía vocal, coros, arreglos, etc.  Incluye 8 horas de grabación; un dia entero para ultimar todos los detalles y dejar la cancion perfecta."
                  rootClassName="rootClassName5"
                ></FeatureCard>
              </div>
            </div>
            <div className="grupos-steps">
              <h1 className="grupos-text09">¿Como Funciona?</h1>
              <div className="grupos-container4">
                <div className="grupos-container5">
                  <div className="step">
                    <h1 className="grupos-text10">
                      <span>1</span>
                    </h1>
                    <h1 className="grupos-text12">Concepto</h1>
                    <span className="grupos-text13">
                      <span>
                        Nos enseñais vuestra canción, tocada en directo o en
                        cualquier grabación que tengáis. Podéis darnos algunos
                        ejemplos de como visualizáis el sonido que queréis para
                        vuestro tema.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step grupos-step1">
                    <h1 className="grupos-text16">
                      <span>2</span>
                    </h1>
                    <h1 className="grupos-text18">Planificación</h1>
                    <span className="grupos-text19">
                      <span>
                        Definimos la estructura del tema, instrumentación en
                        cada sección, cambios, puentes, etc. Vemos que cosas se
                        pueden mejorar y planificamos la sesión de grabación
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="grupos-container6">
                  <div className="step grupos-step2">
                    <h1 className="grupos-text22">
                      <span>3</span>
                    </h1>
                    <h1 className="grupos-text24">Grabación</h1>
                    <span className="grupos-text25">
                      <span>
                        Grabamos todos los instrumentos por pistas separadas.
                        Dependiendo del estilo y otros factores se pueden grabar
                        simultáneamente varios instrumentos, pero no es lo
                        habitual. 
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step grupos-step3">
                    <h1 className="grupos-text28">
                      <span>4</span>
                    </h1>
                    <h1 className="grupos-text30">Finalización</h1>
                    <span className="grupos-text31">
                      <span>
                        Una vez grabado todo se hacen los retoques finales al
                        tema. Se hace la mezcla final, se exporta y viene la
                        masterización. ¡Y ya esta listo para subir a Spotify!
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name7"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .grupos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .grupos-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .grupos-container2 {
            gap: 0;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .grupos-text {
            align-self: center;
          }
          .grupos-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .grupos-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .grupos-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .grupos-text09 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .grupos-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grupos-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grupos-text10 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grupos-text12 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grupos-text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grupos-text16 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grupos-text18 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grupos-text19 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grupos-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grupos-text22 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grupos-text24 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grupos-text25 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grupos-text28 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grupos-text30 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grupos-text31 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          @media (max-width: 1200px) {
            .grupos-text12 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .grupos-text18 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .grupos-text19 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .grupos-text25 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .grupos-text30 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .grupos-text31 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .grupos-container2 {
              width: 100%;
            }
            .grupos-text09 {
              text-align: center;
            }
            .grupos-text10 {
              text-align: center;
            }
            .grupos-text12 {
              text-align: center;
            }
            .grupos-text16 {
              text-align: center;
            }
            .grupos-text18 {
              text-align: center;
            }
            .grupos-text22 {
              text-align: center;
            }
            .grupos-text24 {
              text-align: center;
            }
            .grupos-text28 {
              text-align: center;
            }
            .grupos-text30 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .grupos-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .grupos-container3 {
              grid-template-columns: 1fr;
            }
            .grupos-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .grupos-container4 {
              flex-direction: column;
            }
            .grupos-container5 {
              width: 100%;
            }
            .grupos-step1 {
              padding: var(--dl-space-space-unit);
            }
            .grupos-container6 {
              width: 100%;
            }
            .grupos-step2 {
              padding: var(--dl-space-space-unit);
            }
            .grupos-step3 {
              padding: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .grupos-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .grupos-text01 {
              text-align: justify;
            }
            .grupos-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .grupos-container5 {
              flex-direction: column;
            }
            .grupos-container6 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Grupos
