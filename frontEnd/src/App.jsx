import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"
import Home from './pages/client/Home'
import Product from './pages/client/Product'
import Bag from './pages/client/Bag'
import Dashboard from './pages/admin/Dashboard'
import NavBar from './layouts/NavBar'
import ProductManagement from './pages/admin/ProductManagement'
import ProductDetail from './pages/admin/ProductDetail'
import Order from './pages/admin/Order'
import Login from './pages/admin/Login'
import User from './pages/admin/User'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/bag/:idUser" element={<Bag />} />
        <Route path="/nav" element={<NavBar/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/productManagement" element={<ProductManagement/>} />
        <Route path="/detail" element={<ProductDetail/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </>
  )
}

export default App
