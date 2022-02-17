import React from 'react'
import Content from '../content-component/content'
import Img from '../image-card/Img'
import "./latest.scss"
const LatestPost = () => {
  return (
    <div className='latest'>
     
        <Img background="linear-gradient(45deg,rgb(131, 7, 161), rgb(240, 26, 26));" height="300px" width ="50%"/>
       
       <Content/>
        
    </div>
  )
}

export default LatestPost