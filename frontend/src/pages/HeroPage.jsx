import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Testimonal from '../components/Testimonal'
import Newsletter from '../components/Newsletter'

const HeroPage = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Category/>
    <Testimonal/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default HeroPage