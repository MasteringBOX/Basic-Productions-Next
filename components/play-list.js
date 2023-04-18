import React from 'react'

const PlayList = (props) => {
  return (
    <>
      <div className="play-list-container content">{props.children}</div>
      <style jsx>
        {`
          .play-list-container {
            gap: 0;
            position: relative;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .play-list-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default PlayList
