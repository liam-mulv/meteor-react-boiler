import React from 'react'

// Component
import SkeletonFourAcross from './SkeletonFourAcross_ImageBanner'

// Styled Components
import {LazyBackgroundImage} from '../../common/Common.sc'
import { 
	JigsawContainer,
	ImageCoverWrapper,
	ImageCover,
	ImageTint,
	JigsawColumnLeft,
	JigsawColumnLeftMiddle,
	JigsawColumnRightMiddle,
	JigsawColumnRight,
	PanelFiftyPercentContainer,
	PanelFiftyPercent,
	Spacer,
	ImageBannerWrapper
} from '../../common/ImageBanner.sc'

function ProfileTopImageJigsaw(props) {
		return (
			<div>
				{!props.isLoading ? 
					<ImageBannerWrapper>
						{props.title && <h1>{props.title}</h1>}
						{props.images &&
							<JigsawContainer>
								<JigsawColumnLeft>
									<button>
										<ImageCoverWrapper>
										    <LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[0]}
								            />
										</ImageCoverWrapper>
									</button>
								</JigsawColumnLeft>
								<JigsawColumnLeft>
									<button>
										<ImageCoverWrapper>
										    <LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[1]}							            />
										</ImageCoverWrapper>
									</button>
								</JigsawColumnLeft>
								<JigsawColumnLeft>
									<button>
										<ImageCoverWrapper>
										    <LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[2]}							            />
										</ImageCoverWrapper>
									</button>
								</JigsawColumnLeft>
								<JigsawColumnLeft>
									<button>
										<ImageCoverWrapper>
										    <LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[3]}							            />
										</ImageCoverWrapper>
									</button>
								</JigsawColumnLeft>
							</JigsawContainer>
						}
					</ImageBannerWrapper>
				:
				<SkeletonFourAcross/>
			}
		</div>
	)

}

export default ProfileTopImageJigsaw