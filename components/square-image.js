import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const SquareImage = (props) => {
  return (
    <>
      <div className={`square-image-container ${props.rootClassName} `}>
        <Image
          alt={props.image_alt}
          src={props.image_src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%'}}
          className="homeImage"
        />
        <div className="imageTitle square-image-container1">
          <h1 className="square-image-text">{props.heading}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .square-image-container {
            position: relative;
            margin: 4px;
          }
          .square-image-container1:hover {
            opacity: 1;
          }
          .square-image-text {
            opacity: inherit;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  )
}

SquareImage.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/singer.jpg',
  heading: '',
}

SquareImage.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default SquareImage
