import React from 'react'

import Video from './Video'

const VideosList = ({ videos }) => {
  return(
    <div>
      <h2>Videos</h2>
      <div>
        {videos.map(video =>
          <Video
            name={video.name}
            key={video.key}
            site={video.site}
            embed_path={video.embed_path}
            link_path={video.link_path}
          />
        )}
      </div>
    </div>
  )
}

export default VideosList
