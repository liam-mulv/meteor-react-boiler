import React from 'react'

// Component
import Skeleton from './SkeletonCollage_ImageBanner'

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

								<JigsawColumnLeftMiddle>
									<button>
										<ImageCoverWrapper>
										    <LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[1]}
								            />
										</ImageCoverWrapper>
									</button>
									<Spacer/>
									<PanelFiftyPercentContainer>
										<PanelFiftyPercent>
											<button>
												<ImageCoverWrapper>
													<LazyBackgroundImage 
										              width="100%" 
										              height="100%" 
										              lazyLoad 
								              		src={props.images[2]}
										            />
												</ImageCoverWrapper>
											</button>
										</PanelFiftyPercent>
										<PanelFiftyPercent>
											<button>
												<ImageCoverWrapper>
													<LazyBackgroundImage 
										              width="100%" 
										              height="100%" 
										              lazyLoad 
								              		  src={props.images[3]}
										            />				
												</ImageCoverWrapper>
											</button>
										</PanelFiftyPercent>
									</PanelFiftyPercentContainer>
								</JigsawColumnLeftMiddle>

								<JigsawColumnRightMiddle>
									<button>
										<ImageCoverWrapper>
											<LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[4]}
								            />	
										</ImageCoverWrapper>
									</button>
									<Spacer/>
									<button>
										<ImageCoverWrapper>
											<LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[5]}
								            />	
										</ImageCoverWrapper>
									</button>
								</JigsawColumnRightMiddle>

								<JigsawColumnRight>
									<button>
										<ImageCoverWrapper>
											<LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[6]}
								            />	
										</ImageCoverWrapper>
									</button>
									<Spacer/>
									<button>
										<ImageCoverWrapper>
											<LazyBackgroundImage 
								              width="100%" 
								              height="100%" 
								              lazyLoad 
								              src={props.images[7]}
								            />	
										</ImageCoverWrapper>
									</button>
								</JigsawColumnRight>
							</JigsawContainer>
						}
					</ImageBannerWrapper>
				:
					<Skeleton/>
			}
		</div>
	)

}

export default ProfileTopImageJigsaw