import React, {useEffect, useState} from 'react'

// NPM
import data from 'emoji-mart/data/messenger.json'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'


// Styled Components
import {MiddleContentWrapper} from './MyCollabs.sc'
import {
	MessageWindow,

	MessageWindowHeader,
	MessageWindowIcon,

	MessageBlockWrapper,
	MessageBlockContainer,

	DisplayPictureWrapper,
	DisplayPictureInnerWrapper,
	DisplayPictureContainer,
	DisplayPicture,

	MessagesWrapper,
	MessageSenderTitle,
	MessageWrapper,
	Message,


	ChatInputWrapper, 
	ChatInputContainer, 
	ChatInputIconsWrapper, 
	InputFieldContainer,

	Time
} from './MiddleContent.sc'
import {FlexSpacer, LazyLoadBackgroundImage} from '../../common/Common.sc'

// Icons
import CommentIcon from '../../icons/comment'
import HeartIcon from '../../icons/heart'
import InstagramIcon from '../../icons/instagram'
import HandPeaceIcon from '../../icons/hand-peace'
import PaperclipIcon from '../../icons/paperclip'




function renderChatInput() {

	const [emojiMartIsOpen, setEmojiMartIsOpen] = useState(false)
	const [emojiIsHovered, setEmojiIsHovered] = useState(false)


	toggleHover = () => {
		setEmojiIsHovered(!emojiIsHovered)
	}

	return (
		<ChatInputWrapper>
			<ChatInputContainer>
				{emojiMartIsOpen && <Picker style={{position: 'absolute', right: '00px', bottom: '60px'}} set='messenger' data={data} />}
				<ChatInputIconsWrapper>
					<a><PaperclipIcon/></a>
				</ChatInputIconsWrapper>
				<InputFieldContainer>
					<input placeholder="Type a message..."/>
					<div onClick={() => setEmojiMartIsOpen(!emojiMartIsOpen)}  onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
						{!emojiIsHovered ? <Emoji set='messenger' emoji={{ id: 'smiley', skin: 3 }} size={28} /> : <Emoji set='messenger' emoji={{ id: 'stuck_out_tongue_winking_eye', skin: 3 }} size={28} />}
					</div>
				</InputFieldContainer>
				<ChatInputIconsWrapper>
					<a><HandPeaceIcon/></a>
				</ChatInputIconsWrapper>
			</ChatInputContainer>
		</ChatInputWrapper>
	)
}


function MiddleContent() {
	return (
		<MiddleContentWrapper>

			<MessageWindow>
				
				<FlexSpacer height="30px"/>

				<MessageBlockWrapper>
					<MessageBlockContainer>

						<DisplayPictureWrapper>
							<DisplayPictureInnerWrapper>
								<DisplayPictureContainer>
									<DisplayPicture
										width="100%" 
						                height="100%" 
						                lazyLoad 
						                src={"https://files.slack.com/files-pri/TM2DYBXQR-FTTD1KCBG/screen_shot_2020-02-09_at_12.28.39_am.png"}
						            />
								</DisplayPictureContainer>
							</DisplayPictureInnerWrapper>
						</DisplayPictureWrapper>


						<MessagesWrapper>
							<MessageSenderTitle>Emily van Run</MessageSenderTitle>
							<MessageWrapper>
								<Message position="top">Hi Julia. Happy to have you onboard for our collab!</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="bottom">Let me know if you have any questions or want to run some post ideas past me.</Message>
							</MessageWrapper>
						</MessagesWrapper>

					</MessageBlockContainer>
				</MessageBlockWrapper>
				<Time>5/26/19, 10:59 PM</Time>

				<MessageBlockWrapper>
					<MessageBlockContainer>
					<MessagesWrapper>
							<MessageWrapper>
								<Message position="top" right={true}>Hi! Omg so excited to collab with you guys!</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="middle" right={true}>Simply love your latest collection. I was wondering when I could expect to receive my items.</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="middle" right={true}>do you think it might be this week?</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="bottom" right={true}>I'm just going away for the weekend, so if not earliest will be Monday</Message>
							</MessageWrapper>
						</MessagesWrapper>
					</MessageBlockContainer>
				</MessageBlockWrapper>


				<MessageBlockWrapper>
					<MessageBlockContainer>

						<DisplayPictureWrapper>
							<DisplayPictureInnerWrapper>
								<DisplayPictureContainer>
									<DisplayPicture
										width="100%" 
						                height="100%" 
						                lazyLoad 
						                className="influencer-bg-img" 
						                src={"https://files.slack.com/files-pri/TM2DYBXQR-FTTD1KCBG/screen_shot_2020-02-09_at_12.28.39_am.png"}
						            />
								</DisplayPictureContainer>
							</DisplayPictureInnerWrapper>
						</DisplayPictureWrapper>


						<MessagesWrapper>
							<MessageSenderTitle>Emily van Run</MessageSenderTitle>
							<MessageWrapper>
								<Message position="solo">No stress! Within 3-4 days of receiving the post is perfect.</Message>
							</MessageWrapper>
						</MessagesWrapper>

					</MessageBlockContainer>
				</MessageBlockWrapper>

				<Time>5/26/19, 11:05 PM</Time>

				<MessageBlockWrapper>
					<MessageBlockContainer>
						<MessagesWrapper>
					<MessagesWrapper>
							<MessageWrapper>
								<Message position="top" right={true}>Great!</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="bottom" right={true}>So I'm thinking of doing a story and a post, but will let you know if I have any special ideas... Maybe a beach shoot could be cool? 🤔</Message>
							</MessageWrapper>
						</MessagesWrapper>
						</MessagesWrapper>
					</MessageBlockContainer>
				</MessageBlockWrapper>


				<MessageBlockWrapper>
					<MessageBlockContainer>
						<DisplayPictureWrapper>
							<DisplayPictureInnerWrapper>
								<DisplayPictureContainer>
									<DisplayPicture
										width="100%" 
						                height="100%" 
						                lazyLoad 
						                className="influencer-bg-img" 
						                src={"https://files.slack.com/files-pri/TM2DYBXQR-FTTD1KCBG/screen_shot_2020-02-09_at_12.28.39_am.png"}
						            />
								</DisplayPictureContainer>
							</DisplayPictureInnerWrapper>
						</DisplayPictureWrapper>
						<MessagesWrapper>
							<MessageSenderTitle>Emily van Run</MessageSenderTitle>
							<MessageWrapper>
								<Message position="solo">Yas! We loveee shoots in beachy locations! 😍😍😍 </Message>
							</MessageWrapper>
						</MessagesWrapper>
					</MessageBlockContainer>
				</MessageBlockWrapper>


				<MessageBlockWrapper>
					<MessageBlockContainer>
						<MessagesWrapper>
					<MessagesWrapper>
							<MessageWrapper>
								<Message position="top" right={true}>I'm back from our beach shoot!</Message>
							</MessageWrapper>
							<MessageWrapper>
								<Message position="bottom" right={true}>Let me submit it for review and you can check it out!</Message>
							</MessageWrapper>
						</MessagesWrapper>
						</MessagesWrapper>
					</MessageBlockContainer>
				</MessageBlockWrapper>

				<MessageBlockWrapper>
					<MessagesWrapper>
						<MessageWrapper>
							<Message position="solo" right={true} notification={true}><Emoji set='messenger' emoji={{ id: 'sunglasses', skin: 3 }} size={18} /> <b>Julia has submitted an image for review!</b></Message>
						</MessageWrapper>
					</MessagesWrapper>
				</MessageBlockWrapper>
				<MessageBlockWrapper>
					<MessagesWrapper>
						<MessageWrapper>
							<Message position="solo" notification={true}><Emoji set='messenger' emoji={{ id: 'beers', skin: 3 }} size={18} /> <b>Emily has approved the image for posting!</b></Message>
						</MessageWrapper>
					</MessagesWrapper>
				</MessageBlockWrapper>
				<Time>5/26/19, 12:20 PM</Time>

				<MessageBlockWrapper>
					<MessageBlockContainer>
						<DisplayPictureWrapper>
							<DisplayPictureInnerWrapper>
								<DisplayPictureContainer>
									<DisplayPicture
										width="100%" 
						                height="100%" 
						                lazyLoad 
						                className="influencer-bg-img" 
						                src={"https://files.slack.com/files-pri/TM2DYBXQR-FTTD1KCBG/screen_shot_2020-02-09_at_12.28.39_am.png"}
						            />
								</DisplayPictureContainer>
							</DisplayPictureInnerWrapper>
						</DisplayPictureWrapper>
						<MessagesWrapper>
							<MessageSenderTitle>Emily van Run</MessageSenderTitle>
							<MessageWrapper>
								<Message position="solo">Image was perfect! Your shoot looked fantastic, super happy to have worked with you Julia! We will definitely invite you to more collabs. </Message>
							</MessageWrapper>
						</MessagesWrapper>
					</MessageBlockContainer>
				</MessageBlockWrapper>




			</MessageWindow>
			{renderChatInput()}

		</MiddleContentWrapper>
	)
}

export default MiddleContent