import React from 'react'
import Content from '../content-component/content'
import Img from '../image-card/Img'
import "./post.scss"
const PostContainer = () => {
  return (
      <section className='post-section'>
           <div className='title-mini'> 
        <h3> most reads </h3>
        </div>
        <div className='post-con'>
       
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       <div className='card'>
           <div className='card-image'>
               <Img background="linear-gradient(45deg, rgb(73, 17, 240), rgb(150, 40, 104));" height="200px" />
           </div>
           <div className='card-content'>
   <Content/>
           </div>
       </div>
       
       
   </div>
      </section>
   
  )
}

export default PostContainer