import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const OtrosServiciosDeGrabacion = (props) => {
  return (
    <>
      <div className="otros-servicios-de-grabacion-container">
        <Head>
          <title>otros-servicios-de-grabacion - Basic Productions</title>
          <meta
            property="og:title"
            content="otros-servicios-de-grabacion - Basic Productions"
          />
        </Head>
        <div className="otros-servicios-de-grabacion-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name6"></TopImageRow>
          <div className="otros-servicios-de-grabacion-container2 content">
            <h1 className="otros-servicios-de-grabacion-text PageHeading">
              <span>OTROS </span>
              <span>SERVICIOS</span>
              <br></br>
            </h1>
            <div className="otros-servicios-de-grabacion-features">
              <h2 className="otros-servicios-de-grabacion-text04 SubTitle">
                Composición
              </h2>
              <span className="otros-servicios-de-grabacion-text05">
                <span>
                  Creamos tu tema desde cero, letra y música para prácticamente
                  cualquier genero musical.
                </span>
                <br></br>
                <br></br>
                <span>
                  El servicio de comoposición incluye también el de producción
                  musical. Es decir, la grabación del tema, arreglos y voces. 
                </span>
                <span>
                  Un acabado perfecto y profesional para tu canción hecha a
                  medida.
                </span>
                <br></br>
                <br></br>
                <span>
                  También podemos grabar la voz de la canción. Por ejemplo,
                  tienes una letra personal y quieres hacerle un detalle a tu
                  pareja pero no te atreves a cantar y prefieres que lo haga un
                  profesional.
                </span>
                <br></br>
                <br></br>
                <span>
                  Hay dos modalidades de composición, según tus necesidades y
                  presupuesto.
                </span>
                <br></br>
              </span>
              <div className="otros-servicios-de-grabacion-container3">
                <FeatureCard
                  title="Derechos no exclusivos"
                  description="Creamos tu canción usando una base de la que ya disponemos. La letra y melodía son únicas y originales. Sin embargo, podemos usar la base instrumental en otras canciones para otros clientes. Esta es la forma más económica."
                  rootClassName="rootClassName28"
                ></FeatureCard>
                <FeatureCard
                  title="Derechos Exclusivos"
                  description="Creamos tu canción desde cero y los derechos de uso son exclusivamente tuyos. Es un servicio más costoso pero es lo adecuado cuando vas a usar tu canción de forma profesional."
                  rootClassName="rootClassName29"
                ></FeatureCard>
              </div>
            </div>
            <div className="otros-servicios-de-grabacion-steps">
              <h1 className="otros-servicios-de-grabacion-text18">
                ¿Como Funciona?
              </h1>
              <div className="otros-servicios-de-grabacion-container4">
                <div className="otros-servicios-de-grabacion-container5">
                  <div className="step">
                    <h1 className="otros-servicios-de-grabacion-text19">
                      <span>1</span>
                    </h1>
                    <h1 className="otros-servicios-de-grabacion-text21">
                      Concepto
                    </h1>
                    <span className="otros-servicios-de-grabacion-text22">
                      <span>
                        Nos explicas tu idea de canción y el estilo musical que
                        deseas con algunos ejemplos. Normalmente el cliente
                        tiene una letra o un poema, pero no es estrictamente
                        necesario. 
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step otros-servicios-de-grabacion-step1">
                    <h1 className="otros-servicios-de-grabacion-text25">
                      <span>2</span>
                    </h1>
                    <h1 className="otros-servicios-de-grabacion-text27">
                      Creación
                    </h1>
                    <span className="otros-servicios-de-grabacion-text28">
                      <span>
                        Una vez esta claro el estilo musical, definimos la letra
                        y la estructura de la canción para que funcione con el
                        estilo que quieres conseguir. Se crean los acordes y la
                        melodía vocal principal del tema.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="otros-servicios-de-grabacion-container6">
                  <div className="step otros-servicios-de-grabacion-step2">
                    <h1 className="otros-servicios-de-grabacion-text31">
                      <span>3</span>
                    </h1>
                    <h1 className="otros-servicios-de-grabacion-text33">
                      Grabación
                    </h1>
                    <span className="otros-servicios-de-grabacion-text34">
                      <span>
                        Grabamos todos los instrumentos uno a uno. Puedes estar
                        presente en todo el proceso de grabación y ser parte de
                        el. Dando comentarios, sugerencias e ideas de como
                        quieres que sea tu canción.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step otros-servicios-de-grabacion-step3">
                    <h1 className="otros-servicios-de-grabacion-text37">
                      <span>4</span>
                    </h1>
                    <h1 className="otros-servicios-de-grabacion-text39">
                      Finalización
                    </h1>
                    <span className="otros-servicios-de-grabacion-text40">
                      <span>
                        Una vez grabado todo se hacen los retoques finales al
                        tema. Se exporta la mezcla final y se hace la
                        masterización. ¡Ya te puedes llevar tu canción a casa!
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="otros-servicios-de-grabacion-features1">
              <h2 className="otros-servicios-de-grabacion-text43 SubTitle">
                Locuciones
              </h2>
              <span className="otros-servicios-de-grabacion-text44">
                Nos encargamos de todo tipo de Cuñas publicitarias, jingles,
                logos sonoros, doblaje, voces en off, traducciones, etc.
                Disponemos de una amplia red de locutores en diferentes idiomas
                y con distinos registros vocales. Tienes donde elegir.
              </span>
              <div className="otros-servicios-de-grabacion-container7">
                <FeatureCard
                  title="Cuñas"
                  description="Cuñas de radio, spots de TV, jingles y cualquier otro tipo de locucion con o sin musica"
                  rootClassName="rootClassName26"
                ></FeatureCard>
                <FeatureCard
                  title="Locuciones en off"
                  description="Grabaciones profesionales para cursos, audiolibros, contestadores, megafonía, etc."
                  rootClassName="rootClassName27"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name6"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .otros-servicios-de-grabacion-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .otros-servicios-de-grabacion-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .otros-servicios-de-grabacion-container2 {
            gap: 0;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .otros-servicios-de-grabacion-text {
            text-align: center;
          }
          .otros-servicios-de-grabacion-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .otros-servicios-de-grabacion-text04 {
            margin-bottom: 0px;
          }
          .otros-servicios-de-grabacion-text05 {
            text-align: justify;
          }
          .otros-servicios-de-grabacion-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .otros-servicios-de-grabacion-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .otros-servicios-de-grabacion-text18 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .otros-servicios-de-grabacion-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-de-grabacion-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-de-grabacion-text19 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-de-grabacion-text21 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-de-grabacion-text22 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-de-grabacion-text25 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-de-grabacion-text27 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-de-grabacion-text28 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-de-grabacion-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-de-grabacion-text31 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-de-grabacion-text33 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-de-grabacion-text34 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-de-grabacion-text37 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-de-grabacion-text39 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-de-grabacion-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-de-grabacion-features1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .otros-servicios-de-grabacion-text43 {
            margin-bottom: 0px;
          }
          .otros-servicios-de-grabacion-container7 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .otros-servicios-de-grabacion-text21 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .otros-servicios-de-grabacion-text27 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .otros-servicios-de-grabacion-text28 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-de-grabacion-text34 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-de-grabacion-text39 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .otros-servicios-de-grabacion-text40 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .otros-servicios-de-grabacion-container2 {
              width: 100%;
            }
            .otros-servicios-de-grabacion-text05 {
              text-align: justify;
            }
            .otros-servicios-de-grabacion-text18 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text19 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text21 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text25 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text27 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text31 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text33 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text37 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text39 {
              text-align: center;
            }
            .otros-servicios-de-grabacion-text44 {
              text-align: justify;
            }
          }
          @media (max-width: 767px) {
            .otros-servicios-de-grabacion-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-de-grabacion-container3 {
              grid-template-columns: 1fr;
            }
            .otros-servicios-de-grabacion-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-de-grabacion-container4 {
              flex-direction: column;
            }
            .otros-servicios-de-grabacion-container5 {
              width: 100%;
            }
            .otros-servicios-de-grabacion-step1 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-de-grabacion-container6 {
              width: 100%;
            }
            .otros-servicios-de-grabacion-step2 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-de-grabacion-step3 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-de-grabacion-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-de-grabacion-container7 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .otros-servicios-de-grabacion-container2 {
              align-items: center;
            }
            .otros-servicios-de-grabacion-text {
              text-align: center;
            }
            .otros-servicios-de-grabacion-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .otros-servicios-de-grabacion-text05 {
              text-align: justify;
            }
            .otros-servicios-de-grabacion-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .otros-servicios-de-grabacion-container5 {
              flex-direction: column;
            }
            .otros-servicios-de-grabacion-text22 {
              color: var(--dl-color-gray-500);
            }
            .otros-servicios-de-grabacion-text28 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-de-grabacion-container6 {
              flex-direction: column;
            }
            .otros-servicios-de-grabacion-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default OtrosServiciosDeGrabacion
