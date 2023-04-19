import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import PlayList from '../components/play-list'
import BottomImageRow from '../components/bottom-image-row'

const GrabadoEnNuestroEstudio = (props) => {
  return (
    <>
      <div className="grabado-en-nuestro-estudio-container">
        <Head>
          <title>grabado-en-nuestro-estudio - Basic Productions</title>
          <meta
            property="og:title"
            content="grabado-en-nuestro-estudio - Basic Productions"
          />
        </Head>
        <div className="grabado-en-nuestro-estudio-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name5"></TopImageRow>
          <PlayList></PlayList>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name5"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .grabado-en-nuestro-estudio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .grabado-en-nuestro-estudio-container1 {
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default GrabadoEnNuestroEstudio
