import styled from 'styled-components'

export const Navbar = styled.div`
    background-color: #fff;
    display: block;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    height: 70px;
    padding: 5px 35px 5px;
    transition: 0.2s;
    // transform: ${props => props.compact ? ' translateY(0px)' : 'translateY(10px)'};
    // box-shadow: ${props => props.compact && '0px 12px 12px -16px rgba(0,0,0, 0.5)'};
    z-index: 1111;
    position: sticky;
    border-bottom: 1px solid #eee;
`

export const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    
    li:last-child {
        padding-left: 20px;
    }
`

export const NavLeft = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
`

export const List = styled.ul`
    list-style: none;
    margin: 0px;
    height: auto;
    padding: ${props => props.padding ? props.padding : '0px 20px'};
    margin: ${props => props.margin ? props.margin : '20px 0px'};
    display: flex;
    align-items: center;
`

export const ListItem = styled.li`
        font-weight: 700;
        opacity: ${props => props.active ? '1' : '0.4'};
        display: inline-block;
        padding: 0px;
        position: relative;
        color: #000;

        svg {
            width: ${props => props.width && props.width +'px'};
        }
`

export const Brand = styled.h1`
    margin: 7px 0px 0px;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 1.2rem;
    position: relative;
    padding-bottom: 4px;
    border-bottom: 4px solid #000;

    svg {
        width: 24px;
        margin-top: 16px;        
    }
`

export const BrandCenter = styled.h1`
    margin: 13px auto 7px;
    letter-spacing: 0px;
    left: calc(50% - 55px);
    position: absolute;
    overflow: hidden;

    :hover {
        cursor: pointer;
    }
    :hover .brand-shine {
        transform: skewX(20deg) translateX(300px);
    }


`

export const ActiveIndicator = styled.div`
    height: 3px;
    border-radius: 4px;
    width: 100%;
    margin-top: 16px;
    background-color: #000;
    opacity: 1;
`

export const ProfileIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url('${props => props.image && props.image}');
    background-size: cover;
    background-position: center;
    margin-bottom: -2px;
`

export const Bubble = styled.div`
    background-color: #000;
    color: #fff;
    position: absolute;
    margin-top: -8px;
    border-radius: 13px;
    padding: 5px 5px 3px;
    font-size: 0.65rem;
    margin-left: -12px;
    border: 3px solid #fff;
`



export const SearchWrapper = styled.div`
    margin-left: 30px;
`

export const SearchContainer = styled.div`
    border: 1px solid #fff;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
`


export const SearchInput = styled.input`
    border: 0px;
    padding: 0px 0px 0px 20px;
    background-color: #f2f2f2;
    font-size: 0.9rem;
`


export const  SearchButton = styled.button`
    border: 0px;
    background-color: #222;
    color: #fff;
    padding: 7px 18px;
    font-size: 0.9rem;
    text-transform: capitalize;
    font-weight: 700;
`
