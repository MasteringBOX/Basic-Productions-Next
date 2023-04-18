import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const BandSquare = (props) => {
  return (
    <Link href="/grupos">
      <a>
        <div className="subContainerContent">
          <SquareImage
            image_src="/playground_assets/rock_band_2.jpg"
            rootClassName="square-image-root-class-name1"
          ></SquareImage>
        </div>
      </a>
    </Link>
  )
}

BandSquare.defaultProps = {
  image_src: '24baca54-b240-4148-99f5-aff7eaaba62b',
  image_alt: 'image',
}

BandSquare.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BandSquare
