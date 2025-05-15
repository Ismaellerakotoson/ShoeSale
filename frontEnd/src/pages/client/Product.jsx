import React from 'react'
import Header from '../../layouts/Header'
import product4 from '../../assets/images/p4.png'
import Footer from '../../layouts/Footer'

export default function Product() {
  return (
    <div id='Product'>
      <Header/>
      <div className="contain p-5 lg:mx-[12%]">
            <div className="block md:flex gap-5">
                <section className="product-img w-full md:w-[50%]">
                    <div className="w-full h-full">
                        <img src={product4} alt="no-img" className="h-full w-full" />
                    </div>
                    <div className="slide"></div>
                </section>
                <section className=" box-shadow shadow-xl rounded-3xl md:w-[50%]">
                    <div className="product-desc mt-3 lg:mt-10 border-b-2 border-gray-200 p-5">
                        <p className="font-bold f-18">off-white</p>
                        <p className="f-14 text-gray-500 md:mt-2">Out Of Office "Ooo" sneakers</p>
                        <p className="font-weight-500 mt-2 f-18 md:mt-4">$775</p>
                    </div>
                    <div className="p-5">
                        <p>Quantity</p>
                        <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-3">
                            <p className="text-gray-500">-</p>
                            <p className="">1</p>
                            <p className="">+</p>
                        </div>
                        <div className="text-white bg-black mt-8 lg:px-10 rounded-lg text-center w-full">
                            <button className="p-button lg:px-4">Add to cart</button>
                        </div>
                    </div>
                </section>
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
