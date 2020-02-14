import styled from 'styled-components'

export const Navbar = styled.div`
    background-color: #fff;
    display: block;
    top: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
    display: flex;
    height: 60px;
    padding: 0px 30px 0px;
    transition: 0.2s;
    // transform: ${props => props.compact ? ' translateY(0px)' : 'translateY(10px)'};
    // box-shadow: ${props => props.compact && '0px 12px 12px -16px rgba(0,0,0, 0.5)'};
    z-index: 1111;
    position: fixed;
    border-bottom: 1px solid #eee;
`

export const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    li:first-child {
        position: absolute;
        margin-left: -115px;
        margin-top: 6px;
    }
    
    li:last-child {
        padding-right: 5px;
    }
`

export const NavLeft = styled.div`
	display: flex;
    justify-content: center;
`

export const List = styled.ul`
    list-style: none;
    margin: 0px;
    height: auto;
    padding: ${props => props.padding ? props.padding : '0px 20px'};
    margin: ${props => props.margin ? props.margin : '20px 0px'};


`

export const ListItem = styled.li`
        font-weight: 700;
        opacity: ${props => props.active ? '1' : '0.4'};
        display: inline-block;
        padding: 0px 19px 0px 0px;
        position: relative;
        text-transform: lowercase;
        color: #000;

        svg {
            width: ${props => props.width && props.width +'px'};
        }
`

export const Brand = styled.h1`
    margin: 0px;
    svg {
        width: 24px;
        margin-top: 16px;        
    }
`

export const BrandCenter = styled.h1`
    font-size: 2.5rem;
    margin: 13px auto 7px;
    letter-spacing: 0px;
    left: calc(50% - 55px);
    position: absolute;
    overflow: hidden;
    font-weight: 900;

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