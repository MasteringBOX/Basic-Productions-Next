import React from 'react'

const PlayList = (props) => {
  return (
    <>
      <div className="play-list-container content">{props.children}</div>
      <style jsx>
        {`
          .play-list-container {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default PlayList
