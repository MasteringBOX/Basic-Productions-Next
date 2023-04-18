import React from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Contact from '../components/contact'
import BottomImageRow from '../components/bottom-image-row'
import AudioPlayer from "../components/AudioPlayer";

const Player = (props) => {
    return (
        <>
            <div className="contacto-container">
                <Head>
                    <title>Contacto - Basic Productions</title>
                    <meta property="og:title" content="Contacto - Basic Productions" />
                </Head>
                <AudioPlayer/>
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

export default Player
