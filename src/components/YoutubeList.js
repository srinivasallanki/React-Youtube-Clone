import React from 'react'
import YoutubeItem from './YoutubeItem'

const YoutubeList = ({ videos, onVideoSelect }) => {
  return (
    <>
      {videos.map((video) => {
        return (
          <YoutubeItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
          />
        )
      })}
    </>
  )
}

export default YoutubeList
