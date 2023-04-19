import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const HeadphonesSquare = (props) => {
  return (
    <>
      <Link href="/grabado-en-nuestro-estudio">
        <a>
          <div
            className={`headphones-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              heading="Escúcha"
              image_src="/playground_assets/headphones.jpg"
              rootClassName="square-image-root-class-name9"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .headphones-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

HeadphonesSquare.defaultProps = {
  rootClassName: '',
}

HeadphonesSquare.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeadphonesSquare
