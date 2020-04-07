import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// Icons
import FacebokIcon from '../../icons/facebook'
import InstagramIcon from '../../icons/instagram'
import TwitterIcon from '../../icons/twitter'

// Styled Components
import {
	FooterContainer,
	FooterColumnContainer,
	FooterColumn,
	FooterColumnHeader,
	FooterList,
	FooterListItem,
	FooterBottomBar,
	FooterBottomBarBrand,
	FooterBottomBarTrademark,
	FooterBottomBarSocials,
	FooterBottomBarSocialIcon,
	FooterBottomBarSocialsWrapper
} from './Footer.sc'


function Footer() {
	return (
		<FooterContainer>
			<FooterColumn>
				<FooterColumnContainer>
					<FooterColumn>
						<FooterColumnHeader>Categories</FooterColumnHeader>
						<FooterList>
							<FooterListItem>Arts & Craft</FooterListItem>
							<FooterListItem>Culture & Art</FooterListItem>
							<FooterListItem>Design</FooterListItem>
							<FooterListItem>Entertainment</FooterListItem>
						</FooterList>
					</FooterColumn>
					<FooterColumn>
						<FooterColumnHeader>More Categories</FooterColumnHeader>
						<FooterList>
							<FooterListItem>Arts & Craft</FooterListItem>
							<FooterListItem>Culture & Art</FooterListItem>
							<FooterListItem>Design</FooterListItem>
							<FooterListItem>Entertainment</FooterListItem>
						</FooterList>
					</FooterColumn>
					<FooterColumn>
						<FooterColumnHeader>About</FooterColumnHeader>
						<FooterList>
							<FooterListItem>Origin</FooterListItem>
							<FooterListItem>Press & Partnerships</FooterListItem>
							<FooterListItem>Privacy Policy</FooterListItem>
							<FooterListItem>Terms & Conditions</FooterListItem>
						</FooterList>
					</FooterColumn>

					<FooterColumn>
						<FooterColumnHeader>Socials</FooterColumnHeader>
						<FooterList>
							<FooterListItem>Facebook</FooterListItem>
							<FooterListItem>Twitter</FooterListItem>
							<FooterListItem>Instagram</FooterListItem>
						</FooterList>
					</FooterColumn>

					<FooterColumn>
						<FooterColumnHeader>Blog</FooterColumnHeader>
						<FooterList>
							<FooterListItem>Brand Blog</FooterListItem>
							<FooterListItem>Influencer Blog</FooterListItem>
						</FooterList>
					</FooterColumn>
				</FooterColumnContainer>

				<FooterBottomBar>
					<FooterBottomBarBrand>collab</FooterBottomBarBrand>
					<FooterBottomBarTrademark>© Collab Global, Inc. 2020</FooterBottomBarTrademark>
					<FooterBottomBarSocialsWrapper>
						<FooterBottomBarSocials>
							<FooterBottomBarSocialIcon><InstagramIcon/></FooterBottomBarSocialIcon>
							<FooterBottomBarSocialIcon><FacebokIcon/></FooterBottomBarSocialIcon>
							<FooterBottomBarSocialIcon><TwitterIcon/></FooterBottomBarSocialIcon>
						</FooterBottomBarSocials>
					</FooterBottomBarSocialsWrapper>
				</FooterBottomBar>
			</FooterColumn>
		</FooterContainer>
	)
}

export default Footer

