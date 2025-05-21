import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero'
import Services from './Components/Category'
import Features from './Components/Features'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Products from './Components/Products'
import Error from './Components/Error'
import CartItems from './Components/CartItems'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Features />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
