import React from 'react'

import PropTypes from 'prop-types'

import CantanteSquare from './cantante-square'
import LogoSquare from './logo-square'
import BandSquare from './band-square'
import MasteringSquare from './mastering-square'

const TopImageRow = (props) => {
  return (
    <>
      <div
        className={`top-image-row-container imageContainer ${props.rootClassName} `}
      >
        <CantanteSquare rootClassName="cantante-square-root-class-name"></CantanteSquare>
        <LogoSquare rootClassName="logo-square-root-class-name"></LogoSquare>
        <BandSquare></BandSquare>
        <MasteringSquare></MasteringSquare>
      </div>
      <style jsx>
        {`
          .top-image-row-container {
            position: relative;
          }
        `}
      </style>
    </>
  )
}

TopImageRow.defaultProps = {
  rootClassName: '',
}

TopImageRow.propTypes = {
  rootClassName: PropTypes.string,
}

export default TopImageRow
