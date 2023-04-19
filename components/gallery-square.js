import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const GallerySquare = (props) => {
  return (
    <>
      <Link href="/nuestro-estudio-de-grabacin">
        <a>
          <div
            className={`gallery-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              heading="Galería"
              image_src="/playground_assets/estudioweb3.jpg"
              rootClassName="square-image-root-class-name8"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .gallery-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

GallerySquare.defaultProps = {
  rootClassName: '',
}

GallerySquare.propTypes = {
  rootClassName: PropTypes.string,
}

export default GallerySquare
