import React from 'react'
import Content from '../content-component/content'
import Img from '../image-card/Img'
import "./latest.scss"
const LatestPost = () => {
  return (
    <div className='latest'>
     
        <Img background="linear-gradient(-90deg, rgb(73, 173, 240), rgb(150, 40, 104));" height="300px" width ="50%"/>
       
       <Content/>
        
    </div>
  )
}

export default LatestPost