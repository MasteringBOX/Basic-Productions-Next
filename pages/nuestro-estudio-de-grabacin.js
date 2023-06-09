import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Gallery from '../components/gallery'
import BottomImageRow from '../components/bottom-image-row'

const NuestroEstudioDeGrabacin = (props) => {
  return (
    <>
      <div className="nuestro-estudio-de-grabacin-container">
        <Head>
          <title>Nuestro-Estudio-de-Grabacin - Basic Productions</title>
          <meta
            property="og:title"
            content="Nuestro-Estudio-de-Grabacin - Basic Productions"
          />
        </Head>
        <div className="nuestro-estudio-de-grabacin-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name4"></TopImageRow>
          <Gallery rootClassName="gallery-root-class-name"></Gallery>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name4"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .nuestro-estudio-de-grabacin-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nuestro-estudio-de-grabacin-container1 {
            gap: 0;
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default NuestroEstudioDeGrabacin
