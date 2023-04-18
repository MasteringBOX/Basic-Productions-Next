import React from 'react'

import PropTypes from 'prop-types'

import PianoSquare from './piano-square'
import GallerySquare from './gallery-square'
import HeadphonesSquare from './headphones-square'
import ContactSquare from './contact-square'

const BottomImageRow = (props) => {
  return (
    <>
      <div
        className={`bottom-image-row-container imageContainer ${props.rootClassName} `}
      >
        <PianoSquare rootClassName="piano-square-root-class-name"></PianoSquare>
        <GallerySquare rootClassName="gallery-square-root-class-name"></GallerySquare>
        <HeadphonesSquare rootClassName="headphones-square-root-class-name"></HeadphonesSquare>
        <ContactSquare rootClassName="contact-square-root-class-name"></ContactSquare>
      </div>
      <style jsx>
        {`
          .bottom-image-row-container {
            position: relative;
          }
        `}
      </style>
    </>
  )
}

BottomImageRow.defaultProps = {
  rootClassName: '',
}

BottomImageRow.propTypes = {
  rootClassName: PropTypes.string,
}

export default BottomImageRow
