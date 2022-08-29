import React from 'react'
import Footer from '../../commonComponents/footer/Footer'
import ProductCard from '../../commonComponents/productCard/ProductCard'
import Slider from '../../commonComponents/slider/Slider'
import NavBar from '../../navBar/NavBar'

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12  col-md-12 col-lg-12 text-bold text-center ">
            <h1>Our Service</h1>
          </div>
        </div>
      </div>
      <ProductCard />

      <Footer />


    </div>
  )
}
