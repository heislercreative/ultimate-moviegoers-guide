import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

import placeholder from '../images/placeholder.jpg'

const Video = ({ name, key, site, embed_path, link_path }) => {
  return(
    <Segment floated='left' className='video-card'>
      <iframe width="267" height="150" src={embed_path} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className='video-title'>
        <a href={link_path}>
          <strong>{name}</strong>
        </a>
      </div>
    </Segment>
  )
}

export default Video
