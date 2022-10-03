import React from 'react'
import Announcement from '../mycomponent/Announcement'
import Categories from '../mycomponent/Categories'
import Navbar from '../mycomponent/Navbar'
import Newsletter from '../mycomponent/Newsletter'
import Products from '../mycomponent/Products'
import Slider from '../mycomponent/Slider'
import Footer from '../mycomponent/Footer'
function Home() {
  return (
    <div>
<Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home