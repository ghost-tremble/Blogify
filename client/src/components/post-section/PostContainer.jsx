import React from 'react'
import Content from '../content-component/content'
import Img from '../image-card/Img'

const PostContainer = () => {
  return (
    <div className='post-con'>
        
        <div className='card'>
            <div>
                <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" width="30%"/>
            </div>
            <div className='card-content'>
    <Content/>
            </div>
        </div>
        
        
    </div>
  )
}

export default PostContainer