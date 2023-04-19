import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import FeatureCard from '../components/feature-card'
import BottomImageRow from '../components/bottom-image-row'

const ProduccionMusicalParaCantantes = (props) => {
  return (
    <>
      <div className="produccion-musical-para-cantantes-container">
        <Head>
          <title>Produccion-Musical-para-Cantantes - Basic Productions</title>
          <meta
            property="og:title"
            content="Produccion-Musical-para-Cantantes - Basic Productions"
          />
        </Head>
        <div className="produccion-musical-para-cantantes-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name2"></TopImageRow>
          <div className="produccion-musical-para-cantantes-container2 content">
            <h1 className="produccion-musical-para-cantantes-text PageHeading">
              CANTANTES
            </h1>
            <div className="produccion-musical-para-cantantes-features">
              <span className="produccion-musical-para-cantantes-text01">
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
              <div className="produccion-musical-para-cantantes-container3">
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
            <div className="produccion-musical-para-cantantes-steps">
              <h1 className="produccion-musical-para-cantantes-text07">
                ¿Como Funciona?
              </h1>
              <div className="produccion-musical-para-cantantes-container4">
                <div className="produccion-musical-para-cantantes-container5">
                  <div className="step">
                    <h1 className="produccion-musical-para-cantantes-text08">
                      <span>1</span>
                    </h1>
                    <h1 className="produccion-musical-para-cantantes-text10">
                      Concepto
                    </h1>
                    <span className="produccion-musical-para-cantantes-text11">
                      <span>
                        Nos enseñas tu canción como la tengas. Aunque la cantes
                        acapella. Mientras tengas una letra y una melodía vocal
                        es suficiente. Nos explicas que estilo de musica quieres
                        con algunos ejemplos.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step produccion-musical-para-cantantes-step1">
                    <h1 className="produccion-musical-para-cantantes-text14">
                      <span>2</span>
                    </h1>
                    <h1 className="produccion-musical-para-cantantes-text16">
                      Creación
                    </h1>
                    <span className="produccion-musical-para-cantantes-text17">
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
                <div className="produccion-musical-para-cantantes-container6">
                  <div className="step produccion-musical-para-cantantes-step2">
                    <h1 className="produccion-musical-para-cantantes-text20">
                      <span>3</span>
                    </h1>
                    <h1 className="produccion-musical-para-cantantes-text22">
                      Grabación
                    </h1>
                    <span className="produccion-musical-para-cantantes-text23">
                      <span>
                        Grabamos todos los instrumentos uno a uno. Puedes estar
                        presente en todo el proceso de grabación y ser parte de
                        el. Dando comentarios, sugerencias e ideas de como
                        quieres que sea tu canción.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="step produccion-musical-para-cantantes-step3">
                    <h1 className="produccion-musical-para-cantantes-text26">
                      <span>4</span>
                    </h1>
                    <h1 className="produccion-musical-para-cantantes-text28">
                      Finalización
                    </h1>
                    <span className="produccion-musical-para-cantantes-text29">
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
            <div className="produccion-musical-para-cantantes-features1">
              <h2 className="produccion-musical-para-cantantes-text32 SubTitle">
                Más Servicios
              </h2>
              <span className="produccion-musical-para-cantantes-text33">
                <span>
                  Disponemos de más opciones para grabar otro tipo de proyectos
                  vocales. Si tu opción no aparece, ¡preguntanos!
                </span>
                <br></br>
              </span>
              <div className="produccion-musical-para-cantantes-container7">
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
          .produccion-musical-para-cantantes-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .produccion-musical-para-cantantes-container1 {
            gap: var(--dl-space-space-twounits);
            height: fit-content;
            align-items: center;
          }
          .produccion-musical-para-cantantes-container2 {
            gap: 0;
            flex-wrap: wrap;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .produccion-musical-para-cantantes-text {
            align-self: center;
          }
          .produccion-musical-para-cantantes-features {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .produccion-musical-para-cantantes-text01 {
            text-align: justify;
          }
          .produccion-musical-para-cantantes-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .produccion-musical-para-cantantes-steps {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .produccion-musical-para-cantantes-text07 {
            color: var(--dl-color-gray-black);
            font-size: 2.5rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .produccion-musical-para-cantantes-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .produccion-musical-para-cantantes-container5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .produccion-musical-para-cantantes-text08 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .produccion-musical-para-cantantes-text10 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .produccion-musical-para-cantantes-text11 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .produccion-musical-para-cantantes-text14 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .produccion-musical-para-cantantes-text16 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .produccion-musical-para-cantantes-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .produccion-musical-para-cantantes-container6 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .produccion-musical-para-cantantes-text20 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .produccion-musical-para-cantantes-text22 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .produccion-musical-para-cantantes-text23 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .produccion-musical-para-cantantes-text26 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .produccion-musical-para-cantantes-text28 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .produccion-musical-para-cantantes-text29 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-oneandhalfunits);
            text-align: justify;
          }
          .produccion-musical-para-cantantes-features1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .produccion-musical-para-cantantes-text32 {
            margin-bottom: 0px;
          }
          .produccion-musical-para-cantantes-container7 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .produccion-musical-para-cantantes-text10 {
              font-size: 1.15rem;
              font-weight: 500;
            }
            .produccion-musical-para-cantantes-text16 {
              font-size: 1.15rem;
              align-self: center;
              text-align: center;
              font-weight: 500;
            }
            .produccion-musical-para-cantantes-text17 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .produccion-musical-para-cantantes-text23 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
            .produccion-musical-para-cantantes-text28 {
              font-size: 1.15rem;
              text-align: center;
              font-weight: 500;
            }
            .produccion-musical-para-cantantes-text29 {
              color: var(--dl-color-gray-500);
              font-size: 0.75rem;
            }
          }
          @media (max-width: 991px) {
            .produccion-musical-para-cantantes-container2 {
              width: 100%;
            }
            .produccion-musical-para-cantantes-text01 {
              text-align: justify;
            }
            .produccion-musical-para-cantantes-text07 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text08 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text10 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text14 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text16 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text20 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text22 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text26 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text28 {
              text-align: center;
            }
            .produccion-musical-para-cantantes-text33 {
              text-align: justify;
            }
          }
          @media (max-width: 767px) {
            .produccion-musical-para-cantantes-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .produccion-musical-para-cantantes-container3 {
              grid-template-columns: 1fr;
            }
            .produccion-musical-para-cantantes-steps {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .produccion-musical-para-cantantes-container4 {
              flex-direction: column;
            }
            .produccion-musical-para-cantantes-container5 {
              width: 100%;
            }
            .produccion-musical-para-cantantes-step1 {
              padding: var(--dl-space-space-unit);
            }
            .produccion-musical-para-cantantes-container6 {
              width: 100%;
            }
            .produccion-musical-para-cantantes-step2 {
              padding: var(--dl-space-space-unit);
            }
            .produccion-musical-para-cantantes-step3 {
              padding: var(--dl-space-space-unit);
            }
            .produccion-musical-para-cantantes-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .produccion-musical-para-cantantes-container7 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .produccion-musical-para-cantantes-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .produccion-musical-para-cantantes-text01 {
              text-align: justify;
            }
            .produccion-musical-para-cantantes-steps {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .produccion-musical-para-cantantes-container5 {
              flex-direction: column;
            }
            .produccion-musical-para-cantantes-container6 {
              flex-direction: column;
            }
            .produccion-musical-para-cantantes-features1 {
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

export default ProduccionMusicalParaCantantes
