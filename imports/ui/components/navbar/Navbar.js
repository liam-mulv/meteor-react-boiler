import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router-dom'

// Components
import QuickNav from '../quick-nav/QuickNav'

// Styled Components
import { PrimaryButton, Shine } from '../../common/Common.sc'
import { 
	Navbar, 
	NavRight, 
	NavLeft, 
	Brand, 
	BrandCenter, 
	ActiveIndicator, 
	List, 
	ListItem, 
	ProfileIcon, 
	Bubble,
	SearchWrapper,
	SearchContainer,
	SearchInput,
	SearchButton
} from './Navbar.sc'

//icons
import MessageIcon from '../../icons/message'
import NotificationIcon from '../../icons/bell'
import PuzzleIcon from '../../icons/puzzle'
import HandPeaceIcon from '../../icons/hand-peace'


export default class PrivateHeader extends React.Component {

	componentWillMount = () => {
		if(!Meteor.userId()) {
			this.props.history.replace('/')
		}
	}

	onLogout = () => {
		Accounts.logout()
	}

		state = {
		compactNav: false
	}

	handleScrollFrame = (e) => {
		if(e.scrollTop > 5 && this.state.compactNav !== true) {
			this.setState({compactNav:true})
		} else if (e.scrollTop < 5  && this.state.compactNav !== false) {
			this.setState({compactNav:false})
		}
	}

	render() {

		const navigation_component = [
	  		{ name: 'Fashion', id: 'instagram-section', ref: this.instagramSectionRef}, 
	  		{ name: 'Health & Fitness', id: 'collabs-section', ref: this.collabsSectionRef}, 
	  		{ name: "Lifestyle", id: 'collabd-with-section', ref: this.collabdWithSectionRef},
	  		{ name: 'Tech', id: 'reviews-section', ref: this.reviewsSectionRef}, 
	  		{ name: 'Entertainment', id: 'reviews-section', ref: this.reviewsSectionRef}, 
	  	]

		return (
			<React.Fragment>

			<Navbar compact={this.props.compact}>
				<NavLeft>
					<Link to="/home">
						<Brand>
							collab<Shine className="brand-shine"/>

						</Brand>
					</Link>
					<SearchWrapper>
						<SearchContainer>
							<SearchInput placeholder="Search collabs"/><SearchButton>search</SearchButton>
						</SearchContainer>
					</SearchWrapper>

{/*					<List>
						<Link to="/home"><ListItem active={this.props.location.pathname === '/home'}>Home{this.props.location.pathname === '/home' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/discover"><ListItem active={this.props.location.pathname === '/discover'}>Discover{this.props.location.pathname === '/discover' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/post"><ListItem active={this.props.location.pathname === '/post'}>Post{this.props.location.pathname === '/post' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/search"><ListItem active={this.props.location.pathname === '/search'}>Search{this.props.location.pathname === '/search' && <ActiveIndicator/>}</ListItem></Link>
					</List>*/}
				</NavLeft>
{/*				<Link to="/home">
		
				</Link>*/}
				<NavRight>
					<List padding='0px' margin="14px 0px">
						<Link to="/my-collabs"><ListItem active={this.props.location.pathname === '/my-collabs'}>Collab Pro{this.props.location.pathname === '/my-collabs' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/my-collabs"><ListItem active={this.props.location.pathname === '/my-collabs'}>Collabs{this.props.location.pathname === '/my-collabs' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/my-collabs"><ListItem active={this.props.location.pathname === '/my-collabs'}>Messages{this.props.location.pathname === '/my-collabs' && <ActiveIndicator/>}</ListItem></Link>
{/*						<ListItem active={true}><MessageIcon width={25}/></ListItem>
						<ListItem active={true}><Bubble>12</Bubble><NotificationIcon width={22}/></ListItem>*/}
						<ListItem active={true}><ProfileIcon image="https://www.raconteur.net/wp-content/uploads/2019/03/shutterstock_1135973729.jpg"/></ListItem>
					</List>
				</NavRight>
			</Navbar>
{/*			<QuickNav navigation={navigation_component} notSticky={false} topBorder={false}/>
*/}			</React.Fragment>
		)
	}
}
