import React, {useEffect} from 'react'
import Head from 'next/head'

import TopImageRow from '../components/top-image-row'
import Contact from '../components/contact'
import BottomImageRow from '../components/bottom-image-row'

import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";


const ContactoEstudio = (props) => {
    const router = useRouter();

    useEffect(() => {
        if (router.query.p === 'gracias') {
            toast.success('Gracias por contactar con nosotros, te contestaremos lo antes posible.', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                toastId: 1,
            });
        }
    }, [router.query.p]);
  return (
    <>
        <ToastContainer
            position="bottom-center"
            autoClose={1300}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
            theme="colored"
        />
      <div className="contacto-estudio-container">
        <Head>
          <title>Contacta con el Estudio - Basic Productions</title>
          <meta
            property="og:title"
            content="Contacta con el Estudio - Basic Productions"
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
