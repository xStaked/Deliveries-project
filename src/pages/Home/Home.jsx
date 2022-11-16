import React from 'react'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div style={{backgroundColor:"#1C1A20", height:"100vh"}}>
        <CarouselComponent/>
        <Footer/>
    </div>
  )
}

export default Home