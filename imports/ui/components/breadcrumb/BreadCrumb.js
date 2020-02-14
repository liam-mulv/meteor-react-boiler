import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BreadCrumb } from '../../common/Common.sc'

function BreadCrumbComponent(props) {
	return (
		<BreadCrumb>
			<Link to="/Discover">Discover</Link> / <Link to="/Discover">Influencers</Link> / <Link to="/profile/peachesandcreamlabel">Pariswithlove</Link>
		</BreadCrumb>
	)
}

export default BreadCrumbComponent