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

function StickyApplyFooterComponent(props) {
  return (
    <StickyInviteFooter isLoading={props.isLoading} isStuck={props.isStuck}>
      <StickyInviteFooterRight>
        <ProfilePicture noRepeat={true} size="56%" image="https://cdn.shopify.com/s/files/1/0082/0795/8078/files/Favicon_Black.png?1090"/>
        <p>Peaches & Cream Label {/*<span>4.9<StarIcon/> (7)</span>*/}</p>
      </StickyInviteFooterRight>
      <StickyInviteFooterLeft>
        From $299 / collab<button>Apply Now</button>
      </StickyInviteFooterLeft>
    </StickyInviteFooter>
  )
}

export default StickyApplyFooterComponent;