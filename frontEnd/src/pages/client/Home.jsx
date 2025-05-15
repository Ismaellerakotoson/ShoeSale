import React from 'react'
import Header from '../../layouts/Header'
import '../../assets/theme.css'
import hero from '../../assets/images/hero-img.png'
import product1 from '../../assets/images/p1.png'
import product2 from '../../assets/images/p2.png'
import product3 from '../../assets/images/p3.png'
import product4 from '../../assets/images/p4.png'
import Footer from '../../layouts/Footer'

export default function Home() {
  return (
    <div id='index'>
      <Header/>
        <div className="container mx-auto p-5 overflow-hidden lg:mx-auto lg:w-[77%]">
            <div className="heros flex flex-col text-center items-center bg-hero p-3 rounded-3xl mx-auto lg:items-start lg:text-left lg:flex-row lg:py-10 lg:px-5">
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
                <div className="mt-5 flex gap-6 lg:gap-5">
                    <div className="h-390">
                        <div className="w-195 bg-product rounded-lg lg:w-[210px] ">
                            <img src={product1} alt="no-img" className=""/>
                        </div>
                        <div className="product-desc mt-23">
                            <p className="font-bold">off-white</p>
                            <p className="f-14 text-gray-500">Out Of Office "Ooo" sneakers</p>
                            <p className="font-weight-500 mt-2">$775</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-195 bg-product rounded-lg lg:w-[210px]">
                            <img src={product2} alt="no-img" className=""/>
                        </div>
                        <div className="product-desc mt-23">
                            <p className="font-bold">off-white</p>
                            <p className="f-14 text-gray-500">Out Of Office "Ooo" sneakers</p>
                            <p className="font-weight-500 mt-2">$775</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-195 bg-product rounded-lg lg:w-[210px]">
                            <img src={product3} alt="no-img" className=""/>
                        </div>
                        <div className="product-desc mt-23">
                            <p className="font-bold">off-white</p>
                            <p className="f-14 text-gray-500">Out Of Office "Ooo" sneakers</p>
                            <p className="font-weight-500 mt-2">$775</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-195 bg-product rounded-lg lg:w-[210px]">
                            <img src={product4} alt="no-img" className=""/>
                        </div>
                        <div className="product-desc mt-23">
                            <p className="font-bold">off-white</p>
                            <p className="f-14 text-gray-500">Out Of Office "Ooo" sneakers</p>
                            <p className="font-weight-500 mt-2">$775</p>
                        </div>
                    </div>
                </div>
                <div className="slide flex w-full bg-red-500">
                 
                </div>
            </article>
        </div>
        <Footer/>
    </div>
  )
}
