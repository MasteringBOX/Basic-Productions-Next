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
      </div>
      <style jsx>
        {`
          .square-image-container {
            position: relative;
          }
          .square-image-root-class-name {
            opacity: 0.5;
          }

          .square-image-root-class-name3 {
            opacity: 1;
          }
          .square-image-root-class-name4 {
            opacity: 0.5;
          }
        `}
      </style>
    </>
  )
}

SquareImage.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/microphone_2-800w.jpg',
}

SquareImage.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default SquareImage
