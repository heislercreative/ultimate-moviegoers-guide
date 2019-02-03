import React from 'react'
import { Segment } from 'semantic-ui-react'

import Video from './Video'

const VideosList = ({ videos }) => {
  return(
    <Segment>
      <h2>Videos</h2>
      <div className='credits-container'>
        <div className='credits-list'>
          {videos.map(video =>
            <Video
              name={video.name}
              key={video.key}
              site={video.site}
            />
          )}
        </div>
      </div>
    </Segment>
  )
}

export default VideosList
