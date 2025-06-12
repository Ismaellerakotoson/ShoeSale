import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"
import Home from './pages/client/Home'
import Product from './pages/client/Product'
import Bag from './pages/client/Bag'
import NavBar from './layouts/NavBar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/bag/:idUser" element={<Bag />} />
        <Route path="/nav" element={<NavBar/>} />
      </Routes>
    </>
  )
}

export default App
