import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const Cantantes = (props) => {
  return (
    <>
      <div className="cantantes-container">
        <Head>
          <title>Cantantes - Basic Productions</title>
          <meta property="og:title" content="Cantantes - Basic Productions" />
        </Head>
        <div className="cantantes-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name2"></TopImageRow>
          <div className="cantantes-container2 content">
            <h1 className="cantantes-text PageHeading">CANTANTES</h1>
            <div className="cantantes-features">
              <h2 className="cantantes-text01 SubTitle">Cantautores</h2>
              <span className="cantantes-text02">
                <span>
                  Ofrecemos un arreglo instrumental completo de tus temas
                  partiendo de una línea melódica vocal. Los arreglos los
                  realiza nuestro técnico-instrumentista. No obstante, ponemos a
                  su disposición arreglistas de todo tipo de instrumentos, por
                  si desea un acabado superior.
                </span>
                <br></br>
                <br></br>
                <span>
                  Hay dos modalidades de grabación in-situ, según sus
                  posibilidades económicas. También existe la opción de grabar a
                  distancia.
                </span>
                <br></br>
              </span>
              <div className="cantantes-container3">
                <FeatureCard
                  title="Maquetación"
                  description="Si buscas plasmar tu música para darte a conocer y no quieres pagar mucho por ello, esta es tu opción.Incluye 5 horas de grabación, en una misma sesión, donde almenos se dedicara 1 hora para tomas vocales. Masterización incluida en el proceso para llevarte el tema listo cuando acabas."
                  rootClassName="rootClassName"
                ></FeatureCard>
                <FeatureCard
                  title="Producción Musical"
                  description="Si quieres más tiempo para tu producción, ayudas en composición y letras, mejora de la armonia, de la melodía vocal, etc.Incluye 9 horas de grabación, en dos sesiones, el primer dia se graba la base y en la segunda la voz, asi el cantante puede practicar entre las dos sesiones. La hora final se dedica a la masterización."
                  rootClassName="rootClassName3"
                ></FeatureCard>
              </div>
            </div>
            <div className="cantantes-steps">
              <h1 className="cantantes-text08">¿Como Funciona?</h1>
              <div className="cantantes-container4">
                <div className="cantantes-container5">
                  <div className="step">
                    <h1 className="cantantes-text09">
                      <span>1</span>
                    </h1>
                    <h1 className="cantantes-text11">Concepto</h1>
                    <span className="cantantes-text12">
                      <span>
                        Nos enseñas tu canción como la tengas. Aunque la cantes
                        acapella. Mientras tengas una letra y una melodía vocal
                        es suficiente. Nos explicas que estilo de musica quieres
                        con algunos ejemplos.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step cantantes-step1">
                    <h1 className="cantantes-text15">
                      <span>2</span>
                    </h1>
                    <h1 className="cantantes-text17">Creación</h1>
                    <span className="cantantes-text18">
                      <span>
                        Con la melodía vocal sacamos los acordes y afiamos la
                        estructura de la canción para que funcione con el estilo
                        que quieres conseguir. Es un momento de creatividad para
                        sacar el máximo del tema.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="cantantes-container6">
                  <div className="step cantantes-step2">
                    <h1 className="cantantes-text21">
                      <span>3</span>
                    </h1>
                    <h1 className="cantantes-text23">Grabación</h1>
                    <span className="cantantes-text24">
                      <span>
                        Grabamos todos los instrumentos uno a uno. Puedes estar
                        presente en todo el proceso de grabación y ser parte de
                        el. Dando comentarios, sugerencias e ideas de como
                        quieres que sea tu canción.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step cantantes-step3">
                    <h1 className="cantantes-text27">
                      <span>4</span>
                    </h1>
                    <h1 className="cantantes-text29">Finalización</h1>
                    <span className="cantantes-text30">
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
            <div className="cantantes-features1">
              <h2 className="cantantes-text33 SubTitle">Más Servicios</h2>
              <span>
                <span>
                  Disponemos de más opciones para grabar otro tipo de proyectos
                  vocales. Si tu opción no aparece, ¡preguntanos!
                </span>
                <br></br>
              </span>
              <div className="cantantes-container7">
                <FeatureCard
                  title="Karaoke Star"
                  description="Si te gusta cantar y quieres grabar tu canción favorita con un sonido profesional, esta es tu oportunidad.  Puedes traernos la base musical de la canción o pídenosla y nosotros te la proporcionaremos."
                  rootClassName="rootClassName1"
                ></FeatureCard>
                <FeatureCard
                  title="Hip Hop / Rap"
                  description="Si quieres grabar tu voz sobre una base hip-hop con un sonido profesional, aquí puedes hacerlo.Incluye la grabación de coros, inserción de efectos, etc.Puedes traernos tu base o elegir una de las que tenemos en nuestro repertorio."
                  rootClassName="rootClassName2"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name2"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .cantantes-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cantantes-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
            align-items: center;
          }
          .cantantes-container2 {
            gap: 0;
            flex-wrap: wrap;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .cantantes-text {
            align-self: center;
          }
          .cantantes-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .cantantes-text01 {
            margin-bottom: 0px;
          }
          .cantantes-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .cantantes-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cantantes-text08 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .cantantes-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .cantantes-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .cantantes-text09 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .cantantes-text11 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .cantantes-text12 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .cantantes-text15 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .cantantes-text17 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .cantantes-text18 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .cantantes-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .cantantes-text21 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .cantantes-text23 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .cantantes-text24 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .cantantes-text27 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .cantantes-text29 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .cantantes-text30 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .cantantes-features1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .cantantes-text33 {
            margin-bottom: 0px;
          }
          .cantantes-container7 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .cantantes-text11 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .cantantes-text17 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .cantantes-text18 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .cantantes-text24 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .cantantes-text29 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .cantantes-text30 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .cantantes-container2 {
              width: 100%;
            }
            .cantantes-text08 {
              text-align: center;
            }
            .cantantes-text09 {
              text-align: center;
            }
            .cantantes-text11 {
              text-align: center;
            }
            .cantantes-text15 {
              text-align: center;
            }
            .cantantes-text17 {
              text-align: center;
            }
            .cantantes-text21 {
              text-align: center;
            }
            .cantantes-text23 {
              text-align: center;
            }
            .cantantes-text27 {
              text-align: center;
            }
            .cantantes-text29 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .cantantes-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .cantantes-container3 {
              grid-template-columns: 1fr;
            }
            .cantantes-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .cantantes-container4 {
              flex-direction: column;
            }
            .cantantes-container5 {
              width: 100%;
            }
            .cantantes-step1 {
              padding: var(--dl-space-space-unit);
            }
            .cantantes-container6 {
              width: 100%;
            }
            .cantantes-step2 {
              padding: var(--dl-space-space-unit);
            }
            .cantantes-step3 {
              padding: var(--dl-space-space-unit);
            }
            .cantantes-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .cantantes-container7 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .cantantes-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .cantantes-text02 {
              text-align: justify;
            }
            .cantantes-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .cantantes-container5 {
              flex-direction: column;
            }
            .cantantes-container6 {
              flex-direction: column;
            }
            .cantantes-features1 {
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

export default Cantantes
