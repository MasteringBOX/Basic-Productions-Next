import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import BottomImageRow from '../components/bottom-image-row'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Basic Productions - Estudio de Grabación en Valencia</title>
          <meta property="og:title" content="Basic Productions" />
        </Head>
        <div className="mainContainer">
          <TopImageRow rootClassName="top-image-row-root-class-name"></TopImageRow>
          <BottomImageRow rootClassName="bottom-image-row-root-class-name"></BottomImageRow>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
