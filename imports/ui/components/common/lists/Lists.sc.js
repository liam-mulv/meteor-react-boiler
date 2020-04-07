import styled from 'styled-components'

export const List = styled.div`
	padding: 0px 25px;
	margin: 0px;

	h1 {
	    margin: 0px 10px;
	    font-size: 2rem;
	    font-size: 1.7rem;
	    font-weight: 800;
	    display: flex;
	    align-items: center;
	}

	h4 {
		margin: 5px 0px 5px;
		font-weight: 600;
		font-size: 1.1rem;
	}

	span {
		opacity: 0.5;
	}


	h1 small {
		background-color: #ddd;
	    padding: 6px 8px 4px;
	    border-radius: 13px;
	    color: #222;
	    font-size: 1.1rem;
	    margin-left: 8px;
	    font-weight: 600;
	}
`

export const Header = styled.div`
	padding: 35px 0px 10px!important;
	display: flex!important;
	justify-content: space-between!important;
	// border-bottom: 1px solid #eee;
	align-items: center;

	// button {
	//     background-color: #222;
	//     border: 1px solid #222;
	//     color: #fff;
	//     padding: 10px 15px;
	//     font-size: 1rem;
	//     border-radius: 4px;
	//     font-weight: 700;
	//     border: 1px solid;
	// }

`

export const NoListFound = styled.div`
	text-align: center;
	background-color: #fafafa;
	padding: 10px;
	border-radius: 4px;
	color: rgba(0,0,0, 0.5);
`


export const Loading = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	text-align: center;
    height: 100%;
    padding: 100px 0px;

    > div {
    	flex: 1;
    }
`
