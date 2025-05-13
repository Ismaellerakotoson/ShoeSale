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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/nav" element={<NavBar/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
