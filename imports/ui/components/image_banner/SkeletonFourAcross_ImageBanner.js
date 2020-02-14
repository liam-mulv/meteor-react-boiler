import React from 'react'

// Styled Components
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'
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

function SkeletonFourAcross(props) {
	return (
		<ImageBannerWrapper>
				<JigsawContainer>
					<JigsawColumnLeft>
						<button>
							<ImageCoverWrapper>
								<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</JigsawColumnLeft>
					<JigsawColumnLeft>
						<button>
							<ImageCoverWrapper>
								<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</JigsawColumnLeft>
					<JigsawColumnLeft>
						<button>
							<ImageCoverWrapper>
								<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</JigsawColumnLeft>
					<JigsawColumnLeft>
						<button>
							<ImageCoverWrapper>
								<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</JigsawColumnLeft>
				</JigsawContainer>
		</ImageBannerWrapper>
	)

}

export default SkeletonFourAcross