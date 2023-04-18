import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Contact from '../components/contact'
import BottomImageRow from '../components/bottom-image-row'

const Contacto = (props) => {
  return (
    <>
      <div className="contacto-container">
        <Head>
          <title>Contacto - Basic Productions</title>
          <meta property="og:title" content="Contacto - Basic Productions" />
        </Head>
        <div className="contacto-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name3"></TopImageRow>
          <Contact></Contact>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name3"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .contacto-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contacto-container1 {
            gap: 0;
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default Contacto
