import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../NewCollections/NewCollection'
import Newslatter from '../components/NewsLatter/newslatter'
import Footer from '../components/Footer/Footer'


function Shop() {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollection></NewCollection>
        <Newslatter></Newslatter>
        <Footer></Footer>
        
    </div>
  )
}

export default Shop
