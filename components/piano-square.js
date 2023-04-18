import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const PianoSquare = (props) => {
  return (
    <>
      <Link href="/otros-servicios">
        <a>
          <div
            className={`piano-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              heading="Más servicios"
              image_src="/playground_assets/bruno-croci-5easpnnjwyq-unsplash%20%5B1%5D%20%5B1%5D.jpg"
              rootClassName="square-image-root-class-name10"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .piano-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

PianoSquare.defaultProps = {
  rootClassName: '',
}

PianoSquare.propTypes = {
  rootClassName: PropTypes.string,
}

export default PianoSquare
