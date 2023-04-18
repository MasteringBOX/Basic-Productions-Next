import React from 'react'

import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <>
      <div id="contact" className={`contact-contact ${props.rootClassName} `}>
        <div className="contact-container">
          <h2 className="contact-text Section-Heading">{props.heading1}</h2>
          <div className="contact-container1">
            <form
              action="https://formsubmit.co/info@basicproductions.es"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className="contact-form"
            >
              <input
                type="text"
                name="nombre"
                placeholder={props.textinput_placeholder11}
                className="input"
              />
              <input
                type="hidden"
                id="_next"
                name="_next"
                value="https://kampi.teleporthq.app/#thankyou"
                placeholder={props.textinput_placeholder}
                className="input"
              />
              <input
                type="text"
                name="email"
                multiple="email"
                required
                placeholder={props.email}
                className="input"
              />
              <select
                name="Seleccion"
                type="seleccion"
                className="contact-select"
              >
                <option value="preguntas" selected>
                  Tengo una pregunta sobre vuestro servicio
                </option>
                <option value="reserva">
                  Quiero hacer una reserva para grabar
                </option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                name="mensaje"
                placeholder={props.messagePlaceHolder}
                className="textarea"
              ></textarea>
              <button type="submit" className="contact-cta-btn Anchor button">
                {props.Cta_btn}
              </button>
            </form>
            <div className="contact-content-container">
              <div className="contact-locations-container">
                <div className="contact-location-1">
                  <span className="contact-heading">{props.Heading}</span>
                  <div className="contact-adress">
                    <svg viewBox="0 0 1024 1024" className="contact-icon">
                      <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                    </svg>
                    <span className="Content">{props.text}</span>
                  </div>
                  <div className="contact-email">
                    <svg viewBox="0 0 1024 1024" className="contact-icon2">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:info@kampi.es?subject=Quiero más informacion sobre Kampi"
                      className="Content"
                    >
                      {props.text1}
                    </a>
                  </div>
                  <div className="contact-phone">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="contact-icon4"
                    >
                      <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                    </svg>
                    <span className="Content">{props.text2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-contact {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/mapabasicproductions.jpg');
            scroll-margin-top: 80px;
            background-position: center;
          }
          .contact-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text {
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-container1 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .contact-form {
            gap: var(--dl-space-space-doubleunit);
            width: 50%;
            height: auto;
            display: flex;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-select {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .contact-cta-btn {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #2b2b2b;
          }
          .contact-content-container {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-location-1 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .contact-heading {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon2 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon4 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }

          .contact-root-class-name1 {
            max-width: auto;
          }
          @media (max-width: 991px) {
            .contact-contact {
              flex-direction: row;
            }
            .contact-form {
              width: 50%;
              padding-right: var(--dl-space-space-tenunits);
            }
            .contact-select {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-locations-container {
              flex-wrap: wrap;
            }
            .contact-location-1 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .contact-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .contact-container1 {
              flex-direction: column-reverse;
              justify-content: flex-start;
            }
            .contact-form {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .contact-select {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-cta-btn {
              width: 100%;
              align-self: center;
            }
            .contact-content-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-contact {
              padding: var(--dl-space-space-doubleunit);
              background-position: center;
            }
            .contact-form {
              width: 100%;
            }
            .contact-select {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .contact-content-container {
              align-self: flex-start;
              align-items: flex-start;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .contact-locations-container {
              margin-bottom: 0px;
            }
            .contact-location-1 {
              align-items: flex-start;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  text: 'Calle Arquitecto Juan Perez 6, 46019. Valencia',
  textinput_placeholder11: 'Nombre',
  rootClassName: '',
  Heading: 'Valencia Capital',
  Cta_btn: 'Enviar',
  text1: 'info@basicproductions.es',
  email: 'Email',
  text2: '686 044 297',
  messagePlaceHolder: 'Dejanos un mensaje',
  heading1: 'CONTACTO',
  textinput_placeholder: 'placeholder',
}

Contact.propTypes = {
  text: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  rootClassName: PropTypes.string,
  Heading: PropTypes.string,
  Cta_btn: PropTypes.string,
  text1: PropTypes.string,
  email: PropTypes.string,
  text2: PropTypes.string,
  messagePlaceHolder: PropTypes.string,
  heading1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Contact
