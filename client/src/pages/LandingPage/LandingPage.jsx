import React from 'react'
import "./landing.scss"
import Title from '../../components/Title/Title'
import LatestPost from '../../components/LatestPost/LatestPost'
import PostContainer from '../../components/post-section/PostContainer'

const LandingPage = () => {
  return (
      <section className='landing'>
    <Title/>
     <LatestPost/> 
     <PostContainer/>
      </section>
   
  )
}

export default LandingPage