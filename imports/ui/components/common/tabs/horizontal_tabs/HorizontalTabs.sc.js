import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export const StyledTabs = styled(Tabs)`
    margin: 0px;

    .MuiTabs-flexContainer {
    	// border-bottom: 1px solid #eee;
    }

	.MuiTab-root {
		min-width:initial;
		text-transform: initial;
		padding: 6px 0px;
		margin-right: 25px;
   		font-family: inherit;
		font-weight: 600;
   		font-size: 0.95rem;
    	line-height: 1.75;
	}

	.MuiTab-root[aria-selected=false] {
		opacity: 0.5;
	}

	.MuiTabs-indicator {
		background-color: #000;
	}

`

export const StyledTab = styled(Tab)`

`