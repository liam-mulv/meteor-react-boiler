import styled from 'styled-components'

export const ProfilePictureWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 3px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  position: relative;
  overflow: hidden;

  svg {
    z-index: 0;
    width: 22px!important;
    height: 22px!important;
    opacity: 0.2!important;
  }
`

export const Picture = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${props => props.image && props.image}');
  background-size: cover;
  background-position: center;
  margin-right: 8px;
  z-index: 1;
  position: absolute;
`