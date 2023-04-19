import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const GrabacionesParaGrupos = (props) => {
  return (
    <>
      <div className="grabaciones-para-grupos-container">
        <Head>
          <title>grabaciones-para-grupos - Basic Productions</title>
          <meta
            property="og:title"
            content="grabaciones-para-grupos - Basic Productions"
          />
        </Head>
        <div className="grabaciones-para-grupos-container1 mainContainer">
          <TopImageRow></TopImageRow>
          <div className="grabaciones-para-grupos-container2 content">
            <h1 className="grabaciones-para-grupos-text PageHeading">GRUPOS</h1>
            <div className="grabaciones-para-grupos-features">
              <span className="grabaciones-para-grupos-text01">
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
              <div className="grabaciones-para-grupos-container3">
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
            <div className="grabaciones-para-grupos-steps">
              <h1 className="grabaciones-para-grupos-text09">
                ¿Como Funciona?
              </h1>
              <div className="grabaciones-para-grupos-container4">
                <div className="grabaciones-para-grupos-container5">
                  <div className="step">
                    <h1 className="grabaciones-para-grupos-text10">
                      <span>1</span>
                    </h1>
                    <h1 className="grabaciones-para-grupos-text12">Concepto</h1>
                    <span className="grabaciones-para-grupos-text13">
                      <span>
                        Nos enseñais vuestra canción, tocada en directo o en
                        cualquier grabación que tengáis. Podéis darnos algunos
                        ejemplos de como visualizáis el sonido que queréis para
                        vuestro tema.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step grabaciones-para-grupos-step1">
                    <h1 className="grabaciones-para-grupos-text16">
                      <span>2</span>
                    </h1>
                    <h1 className="grabaciones-para-grupos-text18">
                      Planificación
                    </h1>
                    <span className="grabaciones-para-grupos-text19">
                      <span>
                        Definimos la estructura del tema, instrumentación en
                        cada sección, cambios, puentes, etc. Vemos que cosas se
                        pueden mejorar y planificamos la sesión de grabación
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="grabaciones-para-grupos-container6">
                  <div className="step grabaciones-para-grupos-step2">
                    <h1 className="grabaciones-para-grupos-text22">
                      <span>3</span>
                    </h1>
                    <h1 className="grabaciones-para-grupos-text24">
                      Grabación
                    </h1>
                    <span className="grabaciones-para-grupos-text25">
                      <span>
                        Grabamos todos los instrumentos por pistas separadas.
                        Dependiendo del estilo y otros factores se pueden grabar
                        simultáneamente varios instrumentos, pero no es lo
                        habitual. 
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step grabaciones-para-grupos-step3">
                    <h1 className="grabaciones-para-grupos-text28">
                      <span>4</span>
                    </h1>
                    <h1 className="grabaciones-para-grupos-text30">
                      Finalización
                    </h1>
                    <span className="grabaciones-para-grupos-text31">
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
          .grabaciones-para-grupos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .grabaciones-para-grupos-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .grabaciones-para-grupos-container2 {
            gap: 0;
            flex-wrap: wrap;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .grabaciones-para-grupos-text {
            align-self: center;
          }
          .grabaciones-para-grupos-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .grabaciones-para-grupos-text01 {
            text-align: justify;
          }
          .grabaciones-para-grupos-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .grabaciones-para-grupos-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .grabaciones-para-grupos-text09 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .grabaciones-para-grupos-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grabaciones-para-grupos-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grabaciones-para-grupos-text10 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grabaciones-para-grupos-text12 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grabaciones-para-grupos-text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grabaciones-para-grupos-text16 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grabaciones-para-grupos-text18 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grabaciones-para-grupos-text19 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grabaciones-para-grupos-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .grabaciones-para-grupos-text22 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grabaciones-para-grupos-text24 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grabaciones-para-grupos-text25 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .grabaciones-para-grupos-text28 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .grabaciones-para-grupos-text30 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .grabaciones-para-grupos-text31 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          @media (max-width: 1200px) {
            .grabaciones-para-grupos-text12 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .grabaciones-para-grupos-text18 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .grabaciones-para-grupos-text19 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .grabaciones-para-grupos-text25 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .grabaciones-para-grupos-text30 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .grabaciones-para-grupos-text31 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .grabaciones-para-grupos-container2 {
              width: 100%;
            }
            .grabaciones-para-grupos-text01 {
              text-align: justify;
            }
            .grabaciones-para-grupos-text09 {
              text-align: center;
            }
            .grabaciones-para-grupos-text10 {
              text-align: center;
            }
            .grabaciones-para-grupos-text12 {
              text-align: center;
            }
            .grabaciones-para-grupos-text16 {
              text-align: center;
            }
            .grabaciones-para-grupos-text18 {
              text-align: center;
            }
            .grabaciones-para-grupos-text22 {
              text-align: center;
            }
            .grabaciones-para-grupos-text24 {
              text-align: center;
            }
            .grabaciones-para-grupos-text28 {
              text-align: center;
            }
            .grabaciones-para-grupos-text30 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .grabaciones-para-grupos-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .grabaciones-para-grupos-container3 {
              grid-template-columns: 1fr;
            }
            .grabaciones-para-grupos-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .grabaciones-para-grupos-container4 {
              flex-direction: column;
            }
            .grabaciones-para-grupos-container5 {
              width: 100%;
            }
            .grabaciones-para-grupos-step1 {
              padding: var(--dl-space-space-unit);
            }
            .grabaciones-para-grupos-container6 {
              width: 100%;
            }
            .grabaciones-para-grupos-step2 {
              padding: var(--dl-space-space-unit);
            }
            .grabaciones-para-grupos-step3 {
              padding: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .grabaciones-para-grupos-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .grabaciones-para-grupos-text01 {
              text-align: justify;
            }
            .grabaciones-para-grupos-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .grabaciones-para-grupos-container5 {
              flex-direction: column;
            }
            .grabaciones-para-grupos-container6 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default GrabacionesParaGrupos
