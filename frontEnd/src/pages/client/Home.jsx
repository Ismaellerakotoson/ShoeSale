import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../layouts/Header'
import '../../assets/theme.css'
import hero from '../../assets/images/hero-img.png'
import product1 from '../../assets/images/p1.png'
import product2 from '../../assets/images/p2.png'
import product3 from '../../assets/images/p3.png'
import product4 from '../../assets/images/p4.png'
import Footer from '../../layouts/Footer'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/product/allProducts');
            setProducts(res.data);
        } catch (err) {
            console.error("Erreur lors de la récupération des produits:", err);
        }
    };
    fetchProducts();
    }, []);

    const handleClick = (idProduct)=>{
        console.log("id selection",idProduct);
        navigate(`/product/${idProduct}`);
    }

  return (
    <div id='index'>
      <Header/>
        <div className="container mx-auto p-5 overflow-hidden lg:mx-auto lg:w-[77%]">
           <div className="heros flex flex-col text-center items-center bg-hero p-3 rounded-3xl mx-auto lg:items-start lg:text-left lg:flex-row lg:py-10 lg:px-5 animate-fadeInUp">
                <div className="flex-1 lg:hidden">
                    <img src={hero} alt="no-img" className="w-208 mx-auto"/>
                </div>
                <div className="flex-1 lg:ml-5 lg:mt-10">
                    <div className="txt-contain">
                        <p className="text-orange f-36">25 % off</p>
                        <p className="f-48">summer sale</p>
                        <p className="f-14">Discover our summer styles with discount</p>
                    </div>
                    <div className="text-white bg-black mt-10 lg:w-[45%]  rounded-lg ">
                        <button className="p-button">Shop now</button>
                    </div>
                </div>
                <div className="flex-1 hidden lg:block">
                    <img src={hero} alt="no-img" className="w-490 mx-auto"/>
                </div>
            </div>

            <article className="overflow-auto">
                <h1 className="f-28 mt-10 font-bold">Explore our latest drops</h1>
                    <div className="mt-5 flex gap-6 lg:gap-5 overflow-x-auto">
                        {products.map((product, index) => (
                            <div key={index} className="h-390 min-w-[200px]">
                            <div className="w-195 bg-product rounded-lg lg:w-[210px]" onClick={()=>handleClick(product.idProduct)}>
                                <img
                                src={`http://localhost:5000/uploads/${product.image}`}
                                alt={product.nameProduct}
                                className="w-full h-48 object-cover rounded"
                                />
                            </div>
                            <div className="product-desc mt-4">
                                <p className="font-bold">{product.brand}</p>
                                <p className="f-14 text-gray-500">{product.nameProduct}</p>
                                <p className="font-weight-500 mt-2">${product.price}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                <div className="slide flex w-full bg-red-500">
                 
                </div>
            </article>
        </div>
        <Footer/>
    </div>
  )
}
