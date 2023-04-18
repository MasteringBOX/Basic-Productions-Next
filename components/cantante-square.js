import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const CantanteSquare = (props) => {
  return (
    <>
      <Link href="/cantantes">
        <a>
          <div
            className={`cantante-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              image_src="/playground_assets/singer.jpg"
              rootClassName="square-image-root-class-name5"
              heading="Cantantes"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .cantante-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

CantanteSquare.defaultProps = {
  image_alt: 'image',
  image_src: '7bf07707-6348-4146-9ac3-4754894e7f8b',
  rootClassName: '',
}

CantanteSquare.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CantanteSquare
