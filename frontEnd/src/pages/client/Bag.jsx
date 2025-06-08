import React, { useState, useEffect } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import product1 from '../../assets/images/p1.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Bag() {
  const [carts, setCarts] = useState([]);
  const { idUser } = useParams();

  // Calcul automatique
  const subtotal = carts.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  const shipping = 10; // ou 0 si gratuit
  const tax = subtotal * 0.1; // 10% par exemple
  const discount = 5; // exemple fixe
  const total = subtotal + shipping + tax - discount;
  const [statu, setStatu] = useState("En cours")

  useEffect(() => {
    const getAllCartByUserId = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/allCart/${idUser}`);
        console.log("id user",idUser)
        setCarts(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };
    getAllCartByUserId();
  }, []);

  const handleDeleteProductInCart = async (idCart) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/deleteInCart/${idCart}`);
      const res = await axios.get(`http://localhost:5000/api/product/allCart/${idUser}`);
      setCarts(res.data);
    } catch (error) {
      console.log("Erreur lors de la suppression du produit de la carte :", error);
    }
  };

  const increase = (idCart) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.idCart === idCart ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (idCart) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.idCart === idCart && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = async () => {
  try {
    // Calculer le subtotal
    const subtotal = carts.reduce((acc, cart) => acc + cart.quantity * cart.productPrice, 0);

    // Valeurs fixes ou calculées pour shipping, tax, discount
    const shipping_cost = 10; // fixe ou selon un algorithme
    const tax = subtotal * 0.2; // exemple : 20% TVA
    const discount = 0; // ou selon des règles métier

    const total = subtotal + shipping_cost + tax - discount;


    // 1. Créer la commande
    const orderRes = await axios.post('http://localhost:5000/api/product/addOrder', {
      idUser: idUser,
      subtotal,
      shipping_cost,
      tax,
      discount,
      total,
      statu,
    });

    const idOrders = orderRes.data.orderId;

    // 2. Ajouter chaque produit comme ligne dans order_items
    await Promise.all(
      carts.map(async (cart) => {
        const total_price = cart.quantity * cart.productPrice;
        await axios.post('http://localhost:5000/api/product/addOrderItem', {
          idOrders,
          idProduct: cart.idProduct,
          quantity: cart.quantity,
          price: cart.productPrice,
          total_price
        });
      })
    );

    alert("Commande passée avec succès !");
    setCarts([]);

  } catch (error) {
    console.error("Erreur lors de la commande :", error);
    alert("Une erreur est survenue lors de la commande.");
  }
};



  return (
    <div className="flex flex-col min-h-screen">
      <Header idUser={idUser}/>

      <main className="flex-grow">
        <div className="contain p-5 lg:mx-[12%] flex flex-col lg:flex-row-reverse gap-10">
          {/* SECTION SUMMARY */}
          <section className="product-img box-shadow shadow-xl rounded-3xl md:w-400 md:flex-1">
          <div className="p-7 space-y-2">
            <p className="f-28 font-semi-bold">Summary</p>
            <div className="flex justify-between">
              <p className="f-16">Subtotal</p>
              <p className="f-14">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Shipping and delivery</p>
              <p className="f-14">${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Tax</p>
              <p className="f-14">${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="f-16">Discount</p>
              <p className="f-14 text-red-500">-${discount.toFixed(2)}</p>
            </div>
          </div>
          <hr className="border-t-2 border-gray-200" />
          <div className="p-7">
            <div className="flex justify-between">
              <p className="f-18 font-semi-bold">Total</p>
              <p className="f-15">${total.toFixed(2)}</p>
            </div>
            <div className="text-white bg-black mt-8 lg:px-10 rounded-lg text-center w-full">
              <button className="p-button lg:px-4" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </section>

          {/* SECTION YOUR BAG */}
          <section className="mt-10 w-full">
            <p className="f-28 font-semi-bold">Your bag</p>

            {carts.map((cart, index) => {
              return (
                <div className="flex flex-row gap-5 w-full mt-5" key={index}>
                  <div className="w-140 rounded-lg lg:w-[210px]">
                    <img src={cart.image || product1} alt={cart.nameProduct || "Product image"} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between w-full">
                      <p className="f-16 font-700">{cart.nameProduct}</p>
                      <p className="f-16 font-700">{cart.brand}</p>
                      <p className="f-16 font-700">{cart.cartPrice}$</p>
                    </div>
                    <p className="f-14 text-gray-500 mt-3">Prix Unitaire: {cart.productPrice}$</p>
                    <div className="md:flex md:gap-5">
                      <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-5">
                        <p className="text-gray-500 f-15 font-700 cursor-pointer" onClick={() => decrease(cart.idCart)}>-</p>
                        <p className="f-15 font-700">{cart.quantity}</p>
                        <p className="f-15 font-700 cursor-pointer" onClick={() => increase(cart.idCart)}>+</p>
                      </div>
                      <div className="mt-5">
                        <a href="#" className="underline text-gray-500 font-700" onClick={()=>{handleDeleteProductInCart(cart.idCart)}}>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr className="border-t-2 border-gray-200 mt-2" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
