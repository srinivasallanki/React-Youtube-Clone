import React, { useState, useEffect } from 'react'
import youtube from './api/youtube'
import Search from './components/Search'
import YoutubeList from './components/YoutubeList'
import YoutubeDetail from './components/YoutubeDetail'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  useEffect(() => {
    handleTermSubmit('buildings')
  }, [])

  const handleSelected = (video) => {
    setSelectedVideo(video)
  }
  return (
    <>
      <Search onTerm={handleTermSubmit} />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <YoutubeDetail video={selectedVideo} />
          </div>
          <div className='col-sm-4'>
            <YoutubeList videos={videos} onVideoSelect={handleSelected} />
          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
