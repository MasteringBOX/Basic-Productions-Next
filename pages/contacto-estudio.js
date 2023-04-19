import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Contact from '../components/contact'
import BottomImageRow from '../components/bottom-image-row'

const ContactoEstudio = (props) => {
  return (
    <>
      <div className="contacto-estudio-container">
        <Head>
          <title>Contacto-Estudio - Basic Productions</title>
          <meta
            property="og:title"
            content="Contacto-Estudio - Basic Productions"
          />
        </Head>
        <div className="contacto-estudio-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name3"></TopImageRow>
          <Contact rootClassName="contact-root-class-name1"></Contact>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name3"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .contacto-estudio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contacto-estudio-container1 {
            gap: 0;
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default ContactoEstudio
