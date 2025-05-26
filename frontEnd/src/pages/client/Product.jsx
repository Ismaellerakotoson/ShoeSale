import React from 'react'
import Header from '../../layouts/Header'
import product4 from '../../assets/images/p4.png'
import Footer from '../../layouts/Footer'
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Product() {
    const { id } = useParams();
    const [idUser , setIdUser] = useState(3);
    const [quantity , setQuantity] = useState(1);
    const [price , setPrice ] = useState(300);
    const [message , setMessage] = useState('')

    const [product , setProduct] = useState([])

    const handleSubmitCart = async() =>{
   
      try{
        const response = await axios.post("http://localhost:5000/api/product/addToCart",{
        idUser,
        idProduct:id,
        quantity,
        price
      });
      setMessage("Le produit est bien ajoute dans la carte");
      console.log("Le produit est bien ajoute dans la carte");
      } catch(error){
        console.error(error);
        setMessage("Erreur lors de l'ajout de produit dans le panier")
      }
    }

    const decrease = (e)=>{
        e.preventDefault();
        setQuantity(quantity-1);
    }

    const increase = (e)=>{
        e.preventDefault();
        setQuantity(quantity+1);
    }

    // useEffect() = () =>{
    //     const fecthProduct = async() =>{
    //         await axios.get("http://localhost:5000/api/product/allProducts");
    //         setProduct(res.data)
    //     }
    // }

  return (
    <div id='Product'>
      <Header/>
      <div className="contain p-5 lg:mx-[12%]">
            <div className="block">
                <form action={handleSubmitCart} className='md:flex gap-5'>
                    <section className="product-img w-full md:w-[50%]">
                        <div className="w-full h-full">
                            <img src={product4} alt="no-img" className="h-full w-full" />
                        </div>
                        <div className="slide"></div>
                    </section>
                    <section className=" box-shadow shadow-xl rounded-3xl md:w-[50%]">
                        <div className="product-desc mt-3 lg:mt-10 border-b-2 border-gray-200 p-5">
                            <input className="font-bold f-18" value={idUser} onChange={(e)=>setIdUser(e.target.value)} hidden/>
                            <input className="font-bold f-18" value={id} hidden/>
                            <p className="font-bold f-18">off-white</p>
                            <p className="f-14 text-gray-500 md:mt-2">Out Of Office "Ooo" sneakers</p>
                            <p className="font-weight-500 mt-2 f-18 md:mt-4 ">$ <input value={price} onChange={(e)=>setPrice(e.target.value)}/></p>
                        </div>
                        <div className="p-5">
                            <p>Quantity</p>
                            <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-3">
                                <button className="text-gray-500 cursor-pointer" onClick={decrease}>-</button>
                                <input type='number' className="" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                <p className="cursor-pointer" onClick={increase}>+</p>
                            </div>
                            <div className="text-white bg-black mt-8 lg:px-10 rounded-lg text-center w-full">
                                <button className="p-button lg:px-4" type='submit'>Add to cart</button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
            <div className="block pt-5 md:flex w-full gap-6">
                <section className="md:w-[50%] mt-10">
                    <p className="font-semi-bold f-20 mb-2">Desrciption</p>
                    <hr classNameName='border-t-2 border-gray-200'></hr>
                    <p className="text-gray-500 mt-3">Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classNameic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.</p>
                    <ul className="text-gray-500">
                        <li>Regular fit</li>
                        <li>Regular fit</li>
                        <li>Regular fit</li>
                        <li>Regular fit</li>
                    </ul>
                </section>
                <section className="w-full mt-5 md:w-[50%]">
                    <img src={product4} alt="no-img" className="h-full w-full" />
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
