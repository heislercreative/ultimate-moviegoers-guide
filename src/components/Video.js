import React from 'react'
import { Segment } from 'semantic-ui-react'

const Video = ({ name, embed_path, link_path }) => {
  return(
    <Segment floated='left' className='video-card'>
      <iframe title={name} width="266" height="150" src={embed_path} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className='video-title'>
        <a href={link_path} target='_blank'>
          <strong>{name}</strong>
        </a>
      </div>
    </Segment>
  )
}

export default Video
