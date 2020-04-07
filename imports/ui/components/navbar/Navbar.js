import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Link, useHistory } from 'react-router-dom'
  

// Components
// import QuickNav from '../quick-nav/QuickNav'
import NavigateBack from '../common/navigation/NavigateBack'
import HorizontalTabs from '../common/tabs/horizontal_tabs/HorizontalTabs'

// Styled Components
import { PrimaryButton, Shine } from '../common_old/Common.sc'
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
import BarsIcon from '../../icons/bars'
import SearchIcon from '../../icons/search'

const navigation_routes = [
	{label: 'Lists', path: '/lists'},
	{label: 'Collabs', path: '/collabs'},
]

function PrivateHeader(props) {

	onLogout = () => {
		Accounts.logout()
	}

  	let history = useHistory()
	const renderRouteOrLogo = () => {
  		const location = history.location.pathname
  		console.log(location)
  		if(location !== '/' && location !== '/lists' && location !== '/collabs' ) {
			return (
				<NavigateBack previousPageTitle=""/>
			)
		} else {
			return (
				<Link to="/home">
					<BarsIcon/>
				</Link>
			)
		}

	}

	return (
		<React.Fragment>
			<Navbar>
				<NavLeft>
					{renderRouteOrLogo()}
					<SearchIcon/>
				</NavLeft>
				<BrandCenter>collab</BrandCenter>
				<NavRight>
					<List padding='0px' margin="0px">
						<HorizontalTabs tabs={navigation_routes}/>
{/*						<Link to="/lists"><ListItem active={props.location.pathname === '/lists'}>Lists{props.location.pathname === '/lists' && <ActiveIndicator/>}</ListItem></Link>
						<Link to="/collabs"><ListItem active={props.location.pathname === '/collabs'}>Collabs{props.location.pathname === '/collabs' && <ActiveIndicator/>}</ListItem></Link>*/}
						<ListItem active={props.location.pathname === '/notifications'}><NotificationIcon/>{props.location.pathname === '/notifications' && <ActiveIndicator/>}</ListItem>
						<ListItem active={true}><ProfileIcon image="https://www.raconteur.net/wp-content/uploads/2019/03/shutterstock_1135973729.jpg"/></ListItem>
					</List>
				</NavRight>
			</Navbar>
		</React.Fragment>
	)
}

export default PrivateHeader
