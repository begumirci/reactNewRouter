import React from 'react'
import Header from '../components/Header'
import homeImg from '../assets/home-bg.jpg'
import Footer from '../components/Footer'
import BlogList from '../components/BlogList'

export default function Home() {
  return (
    <div>
      <Header title={'Clean Blog'} subtitle={'A Blog Theme by Start Bootstrap'} image={homeImg} />  
      <BlogList />
      <Footer />
    </div>
  )
}
