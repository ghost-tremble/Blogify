import React from 'react'
import styled from "styled-components"

const Image = styled.div`
background : ${props => props.background};
height :${props=>props.height};
width:${props => props.width};
border-radius: .6rem ;
`

const Img = ({background,height,width}) => {
  return (
<Image background={background} height={height} width={width}/>
  )
}

export default Img