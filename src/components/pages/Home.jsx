import React from 'react'
import Header from '../Header'
import HeaderImgSlider from '../HeaderImgSlider'
import Widgets from '../Widgets'
import PopularItems from '../PopularItems'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Header />
        <HeaderImgSlider />
        <Widgets />
        <PopularItems />
    </div>
  )
}

export default Home