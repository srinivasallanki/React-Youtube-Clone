import React from 'react'

const YoutubeDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <>
      <div>
        <iframe
          title='video player'
          src={videoSrc}
          style={{ width: '100%', height: '450px' }}
        />
      </div>
      <div className=''>
        <h4 className=''>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  )
}

export default YoutubeDetail
