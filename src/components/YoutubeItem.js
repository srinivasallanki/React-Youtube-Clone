import React from 'react'

const YoutubeItem = ({ video, onVideoSelect }) => {
  return (
    <div className='row mb-2' onClick={() => onVideoSelect(video)}>
      <div className='col-sm-4'>
        <img
          alt={video.snippet.title}
          className='img-fluid'
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className='col-sm-8'>{video.snippet.title}</div>
    </div>
  )
}

export default YoutubeItem
