import React from 'react'

// Styled Components
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'
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
	Spacer
} from '../../common/ImageBanner.sc'


function SkeletonJigsaw() {
	return (
		<JigsawContainer>
			<JigsawColumnLeft>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
			</JigsawColumnLeft>

			<JigsawColumnLeftMiddle>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
				<Spacer/>
				<PanelFiftyPercentContainer>
					<PanelFiftyPercent>
						<button>
							<ImageCoverWrapper>
						<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</PanelFiftyPercent>
					<PanelFiftyPercent>
						<button>
							<ImageCoverWrapper>
						<SkeletonPulseTwo/>
							</ImageCoverWrapper>
						</button>
					</PanelFiftyPercent>
				</PanelFiftyPercentContainer>
			</JigsawColumnLeftMiddle>

			<JigsawColumnRightMiddle>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
				<Spacer/>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
			</JigsawColumnRightMiddle>

			<JigsawColumnRight>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
				<Spacer/>
				<button>
					<ImageCoverWrapper>
						<SkeletonPulseTwo/>
					</ImageCoverWrapper>
				</button>
			</JigsawColumnRight>
		</JigsawContainer>
	)
}

export default SkeletonJigsaw