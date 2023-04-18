import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const ContactSquare = (props) => {
  return (
    <>
      <Link href="/galeria">
        <a>
          <div
            className={`contact-square-container subContainerContent ${props.rootClassName} `}
          >
            <SquareImage
              image_src="/playground_assets/telephone.jpg"
              rootClassName="square-image-root-class-name7"
            ></SquareImage>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .contact-square-container {
            position: relative;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

ContactSquare.defaultProps = {
  rootClassName: '',
}

ContactSquare.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactSquare
