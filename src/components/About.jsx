import React from 'react'
import Header from './Header'
import aboutImg from '../assets/home-bg.jpg';
import Footer from './Footer';

export default function About() {
  return (
    <div>
          <Header title={'About Me'} subtitle={'This is what I do.'} image={aboutImg} />
          <div>Merhabalar burası hakkımda sayfasıdır</div>
          <Footer />
    </div>
  )
}
