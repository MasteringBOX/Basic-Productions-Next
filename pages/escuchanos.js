import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const Escuchanos = (props) => {
  return (
    <>
      <div className="escuchanos-container">
        <Head>
          <title>Escuchanos - Basic Productions</title>
          <meta property="og:title" content="Escuchanos - Basic Productions" />
        </Head>
        <div className="escuchanos-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name5"></TopImageRow>
          <div className="escuchanos-container2 content">
            <h1 className="escuchanos-text PageHeading">CANTANTES</h1>
            <div className="escuchanos-features">
              <h2 className="escuchanos-text01 SubTitle">Cantautores</h2>
              <span className="escuchanos-text02">
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
              <div className="escuchanos-container3">
                <FeatureCard
                  title="Maquetación"
                  description="Si buscas plasmar tu música para darte a conocer y no quieres pagar mucho por ello, esta es tu opción.Incluye 5 horas de grabación, en una misma sesión, donde almenos se dedicara 1 hora para tomas vocales. Masterización incluida en el proceso para llevarte el tema listo cuando acabas."
                  rootClassName="rootClassName20"
                ></FeatureCard>
                <FeatureCard
                  title="Producción Musical"
                  description="Si quieres más tiempo para tu producción, ayudas en composición y letras, mejora de la armonia, de la melodía vocal, etc.Incluye 9 horas de grabación, en dos sesiones, el primer dia se graba la base y en la segunda la voz, asi el cantante puede practicar entre las dos sesiones. La hora final se dedica a la masterización."
                  rootClassName="rootClassName21"
                ></FeatureCard>
              </div>
            </div>
            <div className="escuchanos-steps">
              <h1 className="escuchanos-text08">¿Como Funciona?</h1>
              <div className="escuchanos-container4">
                <div className="escuchanos-container5">
                  <div className="step">
                    <h1 className="escuchanos-text09">
                      <span>1</span>
                    </h1>
                    <h1 className="escuchanos-text11">Concepto</h1>
                    <span className="escuchanos-text12">
                      <span>
                        Nos enseñas tu canción como la tengas. Aunque la cantes
                        acapella. Mientras tengas una letra y una melodía vocal
                        es suficiente. Nos explicas que estilo de musica quieres
                        con algunos ejemplos.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step escuchanos-step1">
                    <h1 className="escuchanos-text15">
                      <span>2</span>
                    </h1>
                    <h1 className="escuchanos-text17">Creación</h1>
                    <span className="escuchanos-text18">
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
                <div className="escuchanos-container6">
                  <div className="step escuchanos-step2">
                    <h1 className="escuchanos-text21">
                      <span>3</span>
                    </h1>
                    <h1 className="escuchanos-text23">Grabación</h1>
                    <span className="escuchanos-text24">
                      <span>
                        Grabamos todos los instrumentos uno a uno. Puedes estar
                        presente en todo el proceso de grabación y ser parte de
                        el. Dando comentarios, sugerencias e ideas de como
                        quieres que sea tu canción.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step escuchanos-step3">
                    <h1 className="escuchanos-text27">
                      <span>4</span>
                    </h1>
                    <h1 className="escuchanos-text29">Finalización</h1>
                    <span className="escuchanos-text30">
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
            <div className="escuchanos-features1">
              <h2 className="escuchanos-text33 SubTitle">Más Servicios</h2>
              <span>
                <span>
                  Disponemos de más opciones para grabar otro tipo de proyectos
                  vocales. Si tu opción no aparece, ¡preguntanos!
                </span>
                <br></br>
              </span>
              <div className="escuchanos-container7">
                <FeatureCard
                  title="Karaoke Star"
                  description="Si te gusta cantar y quieres grabar tu canción favorita con un sonido profesional, esta es tu oportunidad.  Puedes traernos la base musical de la canción o pídenosla y nosotros te la proporcionaremos."
                  rootClassName="rootClassName22"
                ></FeatureCard>
                <FeatureCard
                  title="Hip Hop / Rap"
                  description="Si quieres grabar tu voz sobre una base hip-hop con un sonido profesional, aquí puedes hacerlo.Incluye la grabación de coros, inserción de efectos, etc.Puedes traernos tu base o elegir una de las que tenemos en nuestro repertorio."
                  rootClassName="rootClassName23"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name5"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .escuchanos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .escuchanos-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
          }
          .escuchanos-container2 {
            gap: 0;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .escuchanos-text {
            align-self: center;
          }
          .escuchanos-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .escuchanos-text01 {
            margin-bottom: 0px;
          }
          .escuchanos-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .escuchanos-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .escuchanos-text08 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .escuchanos-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .escuchanos-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .escuchanos-text09 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .escuchanos-text11 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .escuchanos-text12 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .escuchanos-text15 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .escuchanos-text17 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .escuchanos-text18 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .escuchanos-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .escuchanos-text21 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .escuchanos-text23 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .escuchanos-text24 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .escuchanos-text27 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .escuchanos-text29 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .escuchanos-text30 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .escuchanos-features1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .escuchanos-text33 {
            margin-bottom: 0px;
          }
          .escuchanos-container7 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .escuchanos-text11 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .escuchanos-text17 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .escuchanos-text18 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .escuchanos-text24 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .escuchanos-text29 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .escuchanos-text30 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .escuchanos-container2 {
              width: 100%;
            }
            .escuchanos-text08 {
              text-align: center;
            }
            .escuchanos-text09 {
              text-align: center;
            }
            .escuchanos-text11 {
              text-align: center;
            }
            .escuchanos-text15 {
              text-align: center;
            }
            .escuchanos-text17 {
              text-align: center;
            }
            .escuchanos-text21 {
              text-align: center;
            }
            .escuchanos-text23 {
              text-align: center;
            }
            .escuchanos-text27 {
              text-align: center;
            }
            .escuchanos-text29 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .escuchanos-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .escuchanos-container3 {
              grid-template-columns: 1fr;
            }
            .escuchanos-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .escuchanos-container4 {
              flex-direction: column;
            }
            .escuchanos-container5 {
              width: 100%;
            }
            .escuchanos-step1 {
              padding: var(--dl-space-space-unit);
            }
            .escuchanos-container6 {
              width: 100%;
            }
            .escuchanos-step2 {
              padding: var(--dl-space-space-unit);
            }
            .escuchanos-step3 {
              padding: var(--dl-space-space-unit);
            }
            .escuchanos-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .escuchanos-container7 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .escuchanos-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .escuchanos-text02 {
              text-align: justify;
            }
            .escuchanos-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .escuchanos-container5 {
              flex-direction: column;
            }
            .escuchanos-container6 {
              flex-direction: column;
            }
            .escuchanos-features1 {
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

export default Escuchanos
