import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Gallery from '../components/gallery'
import BottomImageRow from '../components/bottom-image-row'

const Galeria = (props) => {
  return (
    <>
      <div className="galeria-container">
        <Head>
          <title>Galeria - Basic Productions</title>
          <meta property="og:title" content="Galeria - Basic Productions" />
        </Head>
        <div className="galeria-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name4"></TopImageRow>
          <Gallery rootClassName="gallery-root-class-name"></Gallery>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name4"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .galeria-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .galeria-container1 {
            gap: 0;
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default Galeria
