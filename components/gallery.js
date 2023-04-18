import React from 'react'

import PropTypes from 'prop-types'

import SquareImage from './square-image'

const Gallery = (props) => {
  return (
    <>
      <div
        className={`gallery-container imageContainer ${props.rootClassName} `}
      >
        <div className="image4x subContainerContent">
          <div className="galleryImageSmall">
            <SquareImage
              image_src="/playground_assets/estudioweb03.jpg"
              rootClassName="square-image-root-class-name11"
            ></SquareImage>
          </div>
          <div className="galleryImageSmall">
            <SquareImage
              image_src="/playground_assets/estudioweb01.jpg"
              rootClassName="square-image-root-class-name12"
            ></SquareImage>
          </div>
          <div className="galleryImageSmall">
            <SquareImage
              image_src="/playground_assets/estudioweb04.jpg"
              rootClassName="square-image-root-class-name14"
            ></SquareImage>
          </div>
          <div className="galleryImageSmall">
            <SquareImage
              image_src="/playground_assets/estudioweb07.jpg"
              rootClassName="square-image-root-class-name15"
            ></SquareImage>
          </div>
        </div>
        <div className="image4x subContainerContent">
          <SquareImage
            image_src="/playground_assets/estudio102.jpg"
            rootClassName="square-image-root-class-name13"
          ></SquareImage>
        </div>
        <div className="gallery-container07">
          <div className="image4x subContainerContent">
            <SquareImage
              image_src="/playground_assets/estudioweb161.jpg"
              rootClassName="square-image-root-class-name20"
            ></SquareImage>
          </div>
          <div className="image4x subContainerContent">
            <div className="galleryImageSmall">
              <SquareImage
                image_src="/playground_assets/estudioweb05.jpg"
                rootClassName="square-image-root-class-name16"
              ></SquareImage>
            </div>
            <div className="galleryImageSmall">
              <SquareImage
                image_src="/playground_assets/estudioweb02.jpg"
                rootClassName="square-image-root-class-name17"
              ></SquareImage>
            </div>
            <div className="galleryImageSmall">
              <SquareImage
                image_src="/playground_assets/estudioweb08.jpg"
                rootClassName="square-image-root-class-name18"
              ></SquareImage>
            </div>
            <div className="galleryImageSmall">
              <SquareImage
                image_src="/playground_assets/estudioweb15.jpg"
                rootClassName="square-image-root-class-name19"
              ></SquareImage>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-container {
            position: relative;
          }
          .gallery-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
          }

          @media (max-width: 479px) {
            .gallery-container07 {
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  rootClassName: '',
}

Gallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery
