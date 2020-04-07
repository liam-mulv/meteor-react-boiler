import React, { useState } from 'react'

// Styled Components
import { 
  MoreCollabWrapper,
  MoreCollabTile, 
  MoreCollabImage, 
} from './MoreCollab.sc'

function MoreCollab(props) {
    return (
        <MoreCollabWrapper simple={props.simple} className="collabWrapper">
          <MoreCollabTile>
            <p>+3 more collabs</p>
            <MoreCollabImage/>
          </MoreCollabTile>
        </MoreCollabWrapper>
      )
}

export default MoreCollab
