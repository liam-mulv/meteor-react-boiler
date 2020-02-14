import React, { useState } from 'react'

import { 
  ProfileLeft,
  ProfileRight,
  ProfileSidebar,
  ProfileInfoFlex,
  ProfileInfoRow,
} from './ProfileInfo.sc'

import {
  SkeletonProfilePictureContainer,
  SkeletonUsername,
  SkeletonInstagramHandle,
  SkeletonTextOverflowWrapper,
  SkeletonProfileStats,
  SkeletonProfileStat,
  SkeletonProfileButtonContainer,
  SkeletonProfileButton,
  SkeletonInfoBlock,
  SkeletonProfileInfo,
  SkeletonProfileInfoRow,
  SkeletonTagContainer,
  SkeletonTag
} from './SkeletonProfileContent.sc'

import {Spacer, PageTitleWrapper} from '../../common/Common.sc'


import {SkeletonText} from '../../common/Skeleton.sc'

function SkeletonProfileSidebar(props) {
  return (
    <div>

      <PageTitleWrapper flex={true} padding="60px 0px">
        <ProfileRight>
          <SkeletonTextOverflowWrapper>
            <SkeletonText width="100px" height="23px" margin="0px 0px 10px"/>
            <SkeletonText width="300px" height="40px" margin="0px 0px 10px"/>
            <SkeletonText width="120px" height="24px" margin="0px 0px 10px"/>
          </SkeletonTextOverflowWrapper>
          <SkeletonProfileStats>
            <SkeletonProfileStat/><SkeletonProfileStat/>
          </SkeletonProfileStats>
          <SkeletonTagContainer>
            <SkeletonTag/><SkeletonTag/><SkeletonTag/>
          </SkeletonTagContainer>
          <SkeletonProfileButtonContainer>
            <SkeletonProfileButton/><SkeletonProfileButton/><SkeletonProfileButton/>
          </SkeletonProfileButtonContainer>
        </ProfileRight>
        <ProfileLeft>
          <div>
            <SkeletonText width="100%" height="24px" margin="35px 0px 0px"/>
            <SkeletonText width="75%" height="24px" margin="10px 0px 0px 0px"/>
          </div>
          <ProfileInfoFlex>     
            <SkeletonProfileInfoRow width="142.25px">
              <SkeletonInfoBlock>
                <SkeletonText width="40%" height="24px" margin="0px 0px 12px"/>
                <SkeletonText width="100%" height="24px" margin="0px 0px 40px"/>
              </SkeletonInfoBlock>
            </SkeletonProfileInfoRow>
            <SkeletonProfileInfoRow width="135px">
              <SkeletonInfoBlock>
                <SkeletonText width="40%" height="24px" margin="0px 0px 12px"/>
                <SkeletonText width="100%" height="24px" margin="0px 0px 40px"/>
              </SkeletonInfoBlock>
            </SkeletonProfileInfoRow>
            <SkeletonProfileInfoRow width="284px">
              <SkeletonInfoBlock>
                <SkeletonText width="40%" height="24px" margin="0px 0px 12px"/>
                <SkeletonText width="100%" height="24px" margin="0px 0px 40px"/>
              </SkeletonInfoBlock>
            </SkeletonProfileInfoRow>
            <SkeletonProfileInfoRow width="150px">
              <SkeletonInfoBlock>
                <SkeletonText width="40%" height="24px" margin="0px 0px 12px"/>
                <SkeletonText width="100%" height="24px" margin="0px 0px 40px"/>
              </SkeletonInfoBlock>
            </SkeletonProfileInfoRow>
          </ProfileInfoFlex>
        </ProfileLeft>
      </PageTitleWrapper>
    </div>
  )
}

export default SkeletonProfileSidebar
