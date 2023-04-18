import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const OtrosServicios = (props) => {
  return (
    <>
      <div className="otros-servicios-container">
        <Head>
          <title>OtrosServicios - Basic Productions</title>
          <meta
            property="og:title"
            content="OtrosServicios - Basic Productions"
          />
        </Head>
        <div className="otros-servicios-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name6"></TopImageRow>
          <div className="otros-servicios-container2 content">
            <h1 className="otros-servicios-text PageHeading">
              <span>OTROS </span>
              <span>SERVICIOS</span>
              <br></br>
            </h1>
            <div className="otros-servicios-features">
              <h2 className="otros-servicios-text04 SubTitle">Composición</h2>
              <span className="otros-servicios-text05">
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
              <div className="otros-servicios-container3">
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
            <div className="otros-servicios-steps">
              <h1 className="otros-servicios-text18">¿Como Funciona?</h1>
              <div className="otros-servicios-container4">
                <div className="otros-servicios-container5">
                  <div className="step">
                    <h1 className="otros-servicios-text19">
                      <span>1</span>
                    </h1>
                    <h1 className="otros-servicios-text21">Concepto</h1>
                    <span className="otros-servicios-text22">
                      <span>
                        Nos explicas tu idea de canción y el estilo musical que
                        deseas con algunos ejemplos. Normalmente el cliente
                        tiene una letra o un poema, pero no es estrictamente
                        necesario. 
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step otros-servicios-step1">
                    <h1 className="otros-servicios-text25">
                      <span>2</span>
                    </h1>
                    <h1 className="otros-servicios-text27">Creación</h1>
                    <span className="otros-servicios-text28">
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
                <div className="otros-servicios-container6">
                  <div className="step otros-servicios-step2">
                    <h1 className="otros-servicios-text31">
                      <span>3</span>
                    </h1>
                    <h1 className="otros-servicios-text33">Grabación</h1>
                    <span className="otros-servicios-text34">
                      <span>
                        Grabamos todos los instrumentos uno a uno. Puedes estar
                        presente en todo el proceso de grabación y ser parte de
                        el. Dando comentarios, sugerencias e ideas de como
                        quieres que sea tu canción.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step otros-servicios-step3">
                    <h1 className="otros-servicios-text37">
                      <span>4</span>
                    </h1>
                    <h1 className="otros-servicios-text39">Finalización</h1>
                    <span className="otros-servicios-text40">
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
            <div className="otros-servicios-features1">
              <h2 className="otros-servicios-text43 SubTitle">Locuciones</h2>
              <span>
                <span>
                  Disponemos de más opciones para grabar otro tipo de proyectos
                  vocales. Si tu opción no aparece, ¡preguntanos!
                </span>
                <br></br>
              </span>
              <div className="otros-servicios-container7">
                <FeatureCard
                  title="Karaoke Star"
                  description="Si te gusta cantar y quieres grabar tu canción favorita con un sonido profesional, esta es tu oportunidad.  Puedes traernos la base musical de la canción o pídenosla y nosotros te la proporcionaremos."
                  rootClassName="rootClassName26"
                ></FeatureCard>
                <FeatureCard
                  title="Hip Hop / Rap"
                  description="Si quieres grabar tu voz sobre una base hip-hop con un sonido profesional, aquí puedes hacerlo.Incluye la grabación de coros, inserción de efectos, etc.Puedes traernos tu base o elegir una de las que tenemos en nuestro repertorio."
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
          .otros-servicios-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .otros-servicios-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .otros-servicios-container2 {
            gap: 0;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .otros-servicios-text {
            text-align: center;
          }
          .otros-servicios-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .otros-servicios-text04 {
            margin-bottom: 0px;
          }
          .otros-servicios-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .otros-servicios-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .otros-servicios-text18 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .otros-servicios-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-text19 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-text21 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-text22 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-text25 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-text27 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-text28 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .otros-servicios-text31 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-text33 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-text34 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-text37 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .otros-servicios-text39 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .otros-servicios-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .otros-servicios-features1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .otros-servicios-text43 {
            margin-bottom: 0px;
          }
          .otros-servicios-container7 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .otros-servicios-text21 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .otros-servicios-text27 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .otros-servicios-text28 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-text34 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-text39 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .otros-servicios-text40 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .otros-servicios-container2 {
              width: 100%;
            }
            .otros-servicios-text18 {
              text-align: center;
            }
            .otros-servicios-text19 {
              text-align: center;
            }
            .otros-servicios-text21 {
              text-align: center;
            }
            .otros-servicios-text25 {
              text-align: center;
            }
            .otros-servicios-text27 {
              text-align: center;
            }
            .otros-servicios-text31 {
              text-align: center;
            }
            .otros-servicios-text33 {
              text-align: center;
            }
            .otros-servicios-text37 {
              text-align: center;
            }
            .otros-servicios-text39 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .otros-servicios-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-container3 {
              grid-template-columns: 1fr;
            }
            .otros-servicios-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-container4 {
              flex-direction: column;
            }
            .otros-servicios-container5 {
              width: 100%;
            }
            .otros-servicios-step1 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-container6 {
              width: 100%;
            }
            .otros-servicios-step2 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-step3 {
              padding: var(--dl-space-space-unit);
            }
            .otros-servicios-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .otros-servicios-container7 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .otros-servicios-container2 {
              align-items: center;
            }
            .otros-servicios-text {
              text-align: center;
            }
            .otros-servicios-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .otros-servicios-text05 {
              text-align: justify;
            }
            .otros-servicios-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .otros-servicios-container5 {
              flex-direction: column;
            }
            .otros-servicios-text22 {
              color: var(--dl-color-gray-500);
            }
            .otros-servicios-text28 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .otros-servicios-container6 {
              flex-direction: column;
            }
            .otros-servicios-features1 {
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

export default OtrosServicios
