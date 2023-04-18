import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import PlayList from '../components/play-list'
import BottomImageRow from '../components/bottom-image-row'
import AudioPlayer from "../components/AudioPlayer";

const Escuchanos = (props) => {
  return (
    <>
      <div className="escuchanos-container">
        <Head>
          <title>Escúchanos - Basic Productions</title>
          <meta property="og:title" content="Escuchanos - Basic Productions" />
        </Head>
        <div className="escuchanos-container1 mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name5"></TopImageRow>
          <PlayList><AudioPlayer/></PlayList>
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
            height: fit-content;
          }
        `}
      </style>
    </>
  )
}

export default Escuchanos
