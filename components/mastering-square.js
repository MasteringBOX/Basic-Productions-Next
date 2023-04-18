import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const MasteringSquare = (props) => {
  return (
    <>
      <Link href="/masterizacion">
        <a>
          <div className="mastering-square-container subContainerContent">
            <SquareImage
              heading="Mastering"
              image_src="/playground_assets/limiter_compressed.jpg"
              rootClassName="square-image-root-class-name2"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .mastering-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

MasteringSquare.defaultProps = {
  image_src: '6f8a24fd-23fb-4eb4-a582-ec090da5cf70',
  image_alt: 'image',
}

MasteringSquare.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default MasteringSquare
