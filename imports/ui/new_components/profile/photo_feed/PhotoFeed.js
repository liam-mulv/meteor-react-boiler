import React, {useEffect, useState} from 'react'

import {PhotoFeedContainer, FeedRow, FeedColumn, ColumnCard} from './PhotoFeed.sc'


function PhotoFeed() {
	return (
		<PhotoFeedContainer>
			<FeedRow>
				<FeedColumn>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/82935617_193241045214996_5714817923398692577_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=lLneLw74BJgAX9Np69X&oh=f24d80fdd569b55b60dfeeae660a5029&oe=5E995329"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e15/87675560_3230257710336487_1550779813804680302_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=MrOMl48R4w0AX-M6yo6&oh=dd0f393f8ca885f9d6314a113bfad0a1&oe=5E8F8797"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/82864185_185141282851480_7117496630711141501_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TSBGRECOXeAAX8e1Z9w&oh=6df9aeed6186a2059d2709b91f2b1e78&oe=5E85B9DB"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/82935617_193241045214996_5714817923398692577_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=lLneLw74BJgAX9Np69X&oh=f24d80fdd569b55b60dfeeae660a5029&oe=5E995329"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e15/87675560_3230257710336487_1550779813804680302_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=MrOMl48R4w0AX-M6yo6&oh=dd0f393f8ca885f9d6314a113bfad0a1&oe=5E8F8797"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/80528067_648672869204790_7917985301352850535_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=bhqvvjq_Dp0AX8ga2GK&oh=aa5f4ea3b5790a204d56ab1abdc93c99&oe=5E963D3F"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e15/87675560_3230257710336487_1550779813804680302_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=MrOMl48R4w0AX-M6yo6&oh=dd0f393f8ca885f9d6314a113bfad0a1&oe=5E8F8797"/></ColumnCard>
				</FeedColumn>
				<FeedColumn>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82695417_561597487726820_7076103034105923539_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=F47s5ft7zCMAX9dY58J&oh=beb95e6812cd16d731d99ce8a1245c92&oe=5E986E7D"/></ColumnCard>
										<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/85195264_664268601051408_1954210519122752321_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-oI7uYjFC4AX-uOwtl&oh=a8fdf7cf4392b3a2c26dad31c8eab401&oe=5E91043A"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/85136682_274446170189206_8948448109147393419_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=KRD89Usf7lIAX_v-_NX&oh=23e19076727ab2f3717f08913fa3b3f7&oe=5E9646CA"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/85136682_274446170189206_8948448109147393419_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=KRD89Usf7lIAX_v-_NX&oh=23e19076727ab2f3717f08913fa3b3f7&oe=5E9646CA"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/85244384_886710001785413_6739276756985606333_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=kzmeZUeshLUAX8B5Nv6&oh=7ac3f3600b17d8ac47998480ee249746&oe=5E8DCF91"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82695417_561597487726820_7076103034105923539_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=F47s5ft7zCMAX9dY58J&oh=beb95e6812cd16d731d99ce8a1245c92&oe=5E986E7D"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/85136682_274446170189206_8948448109147393419_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=KRD89Usf7lIAX_v-_NX&oh=23e19076727ab2f3717f08913fa3b3f7&oe=5E9646CA"/></ColumnCard>

				</FeedColumn>
				<FeedColumn>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/87641616_216732702807605_1055745100832807287_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=vAHPp2TDVFAAX-6fGJx&oh=26984093dcd64b9ede3591b4e383f19d&oe=5E85FED1"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/84855263_474435583250821_3576345468030434838_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=s_yfLh4_-tEAX_kgMFx&oh=3bf1f5e156d8fed2c5708a2da6eb71eb&oe=5E981A78"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/82935617_193241045214996_5714817923398692577_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=lLneLw74BJgAX9Np69X&oh=f24d80fdd569b55b60dfeeae660a5029&oe=5E995329"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e15/87675560_3230257710336487_1550779813804680302_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=MrOMl48R4w0AX-M6yo6&oh=dd0f393f8ca885f9d6314a113bfad0a1&oe=5E8F8797"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/80528067_648672869204790_7917985301352850535_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=bhqvvjq_Dp0AX8ga2GK&oh=aa5f4ea3b5790a204d56ab1abdc93c99&oe=5E963D3F"/></ColumnCard>
										<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82695417_561597487726820_7076103034105923539_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=F47s5ft7zCMAX9dY58J&oh=beb95e6812cd16d731d99ce8a1245c92&oe=5E986E7D"/></ColumnCard>
					<ColumnCard><img src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e15/85136682_274446170189206_8948448109147393419_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=KRD89Usf7lIAX_v-_NX&oh=23e19076727ab2f3717f08913fa3b3f7&oe=5E9646CA"/></ColumnCard>
				</FeedColumn>
			</FeedRow>
		</PhotoFeedContainer>
	)
}

export default PhotoFeed