import React, { useState } from 'react'

// Styled Components
import {
  StickyInviteFooter,
  StickyInviteFooterRight,
  ProfilePicture,
  StickyInviteFooterLeft
} from '../../common/StickyFooter.sc'

// Icons
import PlusIcon from '../../icons/plus'
import StarIcon from '../../icons/star-solid'

function StickyInviteFooterComponent(props) {
  return (
    <StickyInviteFooter isLoading={props.isLoading} isStuck={props.isStuck}>
      <StickyInviteFooterRight>
        <ProfilePicture/>
        <p>@pariswithlove <span>4.9<StarIcon/> (7)</span></p>
      </StickyInviteFooterRight>
      <StickyInviteFooterLeft>
        From $299 / collab<button>Invite To Collab</button>
      </StickyInviteFooterLeft>
    </StickyInviteFooter>
  )
}

export default StickyInviteFooterComponent;