import { useState } from 'react'
import HeroVideoLoop from './components/heroLoop'
import NavBar from './components/navbar'
import BornStory from './components/bornStory'
import './App.css'
import ResponsiveImageGallery from './components/ResponsiveImageGallery';
import ProductCardGrid from './components/ProductCardGrid'
import PhotoGallery from './components/PhotoGallary'
import ServiceTypes from './components/serviceTypes'
import Footer from './components/footer'
import BackToTopArrow from './components/backToTopArrow'
function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='main-div'>
      <BackToTopArrow />
      <NavBar />
      <HeroVideoLoop />
      <BornStory />
      {/* <ResponsiveImageGallery />
      <ProductCardGrid /> */}
      
      <ServiceTypes />
      <PhotoGallery />
      <Footer />
     

     
    </div>

  )
}

export default App
