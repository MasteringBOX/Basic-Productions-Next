import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const LogoSquare = (props) => {
  return (
    <>
      <Link href="/">
        <a>
          <div
            className={`logo-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              image_src="/playground_assets/basicproductionslogo-200h.jpg"
              rootClassName="square-image-root-class-name6"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .logo-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

LogoSquare.defaultProps = {
  image_src: '864370b9-1f45-4080-be40-db30826bfe64',
  image_alt: 'image',
  rootClassName: '',
}

LogoSquare.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LogoSquare
