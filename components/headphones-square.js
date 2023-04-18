import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const HeadphonesSquare = (props) => {
  return (
    <>
      <Link href="/escuchanos">
        <a>
          <div
            className={`headphones-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              image_src="/playground_assets/headphones.jpg"
              rootClassName="square-image-root-class-name9"
              heading="Escúcha"
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
