import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import product1 from '../../assets/images/p1.png'
import product2 from '../../assets/images/p2.png'
import { useState } from 'react'

export default function Bag() {

  return (
    <div className="flex flex-col min-h-screen">
    <Header />

    <main className="flex-grow">
      <div className="contain p-5 lg:mx-[12%] md:flex md:flex-row md:gap-10">
        {/* SECTION SUMMARY */}
        <section className="product-img box-shadow shadow-xl rounded-3xl md:w-400 md:flex-1">
          <div className="p-7 space-y-2">
            <p className="f-28 font-semi-bold">Summary</p>
            <div className="flex justify-between">
              <p className="f-16">Subtotal</p>
              <p className="f-14">$90.00</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Shipping and delivery</p>
              <p className="f-14">$90.00</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Tax</p>
              <p className="f-14">$90.00</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Discount</p>
              <p className="f-14 text-red-500">-$90.00</p>
            </div>
          </div>
          <hr className='border-t-2 border-gray-200'/>
          <div className="p-7">
            <div className="flex justify-between">
              <p className="f-18 font-semi-bold">Total</p>
              <p className="f-15">$90.00</p>
            </div>
            <div className="text-white bg-black mt-8 lg:px-10 rounded-lg text-center w-full">
              <button className="p-button lg:px-4">Checkout</button>
            </div>
          </div>
        </section>

        {/* SECTION YOUR BAG */}
        <section className="mt-10 w-full">
          <p className="f-28 font-semi-bold">Your bag</p>

          {/* Produit 1 */}
          <div className="flex flex-row gap-5 w-full mt-5">
            <div className="w-140 rounded-lg lg:w-[210px]">
              <img src={product1} alt="no-img" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between w-full">
                <p className="f-16 font-700">Nike</p>
                <p className="f-16 font-700">Nike</p>
                <p className="f-16 font-700">$90.00</p>
              </div>
              <p className="f-14 text-gray-500 mt-3">Nike air force premium</p>
              <div className="md:flex md:gap-5">
                <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-5">
                  <p className="text-gray-500 f-15 font-700">-</p>
                  <p className="f-15 font-700">1</p>
                  <p className="f-15 font-700">+</p>
                </div>
                <div className="mt-5">
                  <a href="#" className="underline text-gray-500 font-700">Remove</a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-gray-200 mt-2" />

          {/* Produit 2 */}
          <div className="flex flex-row gap-5 w-full mt-5">
            <div className="w-140 rounded-lg lg:w-[210px]">
              <img src={product2} alt="no-img" />
            </div>
            <div className="flex-1 md:justify-between">
              <div className="flex justify-between w-full">
                <p className="f-16 font-700">Nike</p>
                <p className="f-16 font-700">$90.00</p>
              </div>
              <p className="f-14 text-gray-500 mt-3">Nike air force premium</p>
              <div className="md:flex md:gap-5">
                <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-5">
                  <p className="text-gray-500 f-15 font-700">-</p>
                  <p className="f-15 font-700">1</p>
                  <p className="f-15 font-700">+</p>
                </div>
                <div className="mt-5">
                  <a href="#" className="underline text-gray-500 font-700">Remove</a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-gray-200 mt-2" />
        </section>
      </div>
    </main>

    <Footer />
  </div>
  )
}
