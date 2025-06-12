import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Bag() {
  const { idUser } = useParams();
  const [carts, setCarts] = useState([]);
  const [statu, setStatu] = useState("En cours");

  // État pour forcer le rechargement des données
  const [refresh, setRefresh] = useState(false);

  // Calcul du sous-total du panier
  const subtotal = carts.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

  // Frais de livraison fixes
  const shipping = 10;

  // Calcul de la taxe à 10%
  const tax = subtotal * 0.1;

  // Remise fixe
  const discount = 5;

  // Calcul du total à payer
  const total = subtotal + shipping + tax - discount;

  useEffect(() => {
    // Récupération des produits du panier pour l'utilisateur connecté
    const getAllCartByUserId = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/allCart/${idUser}`);
        setCarts(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };
    getAllCartByUserId();
  }, [refresh, idUser]);

  // Suppression d'un produit spécifique du panier
  const handleDeleteProductInCart = async (idCart) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/deleteInCart/${idCart}`);
      // Mise à jour du panier après suppression
      const res = await axios.get(`http://localhost:5000/api/product/allCart/${idUser}`);
      setCarts(res.data);
    } catch (error) {
      console.log("Erreur lors de la suppression du produit de la carte :", error);
    }
  };

  // Augmentation de la quantité d'un produit dans le panier
  const increase = (idCart) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.idCart === idCart ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Diminution de la quantité d'un produit dans le panier (minimum 1)
  const decrease = (idCart) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.idCart === idCart && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Gestion du passage à la commande (checkout)
  const handleCheckout = async () => {
    try {
      // Recalcul des montants pour la commande
      const subtotal = carts.reduce((acc, cart) => acc + cart.quantity * cart.productPrice, 0);
      const shipping_cost = 10;
      const tax = subtotal * 0.2;
      const discount = 0;
      const total = subtotal + shipping_cost + tax - discount;

      // Création de la commande
      const orderRes = await axios.post('http://localhost:5000/api/product/addOrder', {
        idUser,
        subtotal,
        shipping_cost,
        tax,
        discount,
        total,
        statu,
      });

      const idOrders = orderRes.data.orderId;

      // Ajout des détails de chaque produit dans la commande
      await Promise.all(
        carts.map(async (cart) => {
          const total_price = cart.quantity * cart.productPrice;
          await axios.post('http://localhost:5000/api/product/addOrderItem', {
            idOrders,
            idProduct: cart.idProduct,
            quantity: cart.quantity,
            price: cart.productPrice,
            total_price,
          });
        })
      );

      // Suppression des produits du panier apres commande
      for (const cart of carts) {
        await axios.delete(`http://localhost:5000/api/product/deleteInCart/${cart.idCart}`);
      }

      // Mise à jour locale pour notifier d'un changement dans le panier
      localStorage.setItem('cartChanged', Date.now()); 

      // Rechargement du panier vidé
      const res = await axios.get(`http://localhost:5000/api/product/allCart/${idUser}`);
      setCarts(res.data);

      toast.success("Commande passée avec succès !");
      setCarts([]);

    } catch (error) {
      console.error("Erreur lors de la commande :", error);
      toast.error("Une erreur est survenue lors de la commande.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header idUser={idUser} />

      <main className="flex-grow">
        <div className="contain p-5 lg:mx-[12%] flex flex-col lg:flex-row-reverse gap-10">

          {/* ----------- SECTION RÉCAPITULATIF ----------- */}
          <motion.section
            className="product-img box-shadow shadow-xl rounded-3xl md:w-400 md:flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="p-7 space-y-2">
              <p className="f-28 font-semi-bold">Summary</p>

              {/* Affichage du sous-total */}
              <div className="flex justify-between"><p className="f-16">Subtotal</p><p className="f-14">${subtotal.toFixed(2)}</p></div>

              {/* Affichage des frais de livraison */}
              <div className="flex justify-between"><p className="f-16">Shipping and delivery</p><p className="f-14">${shipping.toFixed(2)}</p></div>

              {/* Affichage de la taxe */}
              <div className="flex justify-between"><p className="f-16">Tax</p><p className="f-14">${tax.toFixed(2)}</p></div>

              {/* Affichage de la remise */}
              <div className="flex justify-between"><p className="f-16">Discount</p><p className="f-14 text-red-500">-${discount.toFixed(2)}</p></div>
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="p-7">
              {/* Affichage du total */}
              <div className="flex justify-between">
                <p className="f-18 font-semi-bold">Total</p>
                <p className="f-15">${total.toFixed(2)}</p>
              </div>

              {/* Bouton pour valider la commande */}
              <div className="text-white bg-black mt-8 lg:px-10 rounded-lg text-center w-full">
                <button className="p-button lg:px-4" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </motion.section>

          {/* ----------- SECTION PANIER ----------- */}
          <section className="mt-10 w-full">
            <p className="f-28 font-semi-bold">Your bag</p>

            {/* Liste des produits dans le panier */}
            {carts.map((cart, index) => (
              <div key={index}>
                <div className="flex flex-row gap-5 w-full mt-5 transform transition duration-300 hover:scale-[1.02] hover:shadow-lg bg-white rounded-xl p-2">

                  {/* Image du produit */}
                  <div className="w-140 rounded-lg lg:w-[210px]">
                    <img src={`http://localhost:5000/uploads/${cart.image}?v=${Date.now()}`} alt={cart.nameProduct} />
                  </div>

                  {/* Détails du produit */}
                  <div className="flex-1">
                    <div className="flex justify-between w-full">
                      <p className="f-16 font-700">{cart.nameProduct}</p>
                      <p className="f-16 font-700">{cart.brand}</p>
                      <p className="f-16 font-700">{cart.cartPrice}$</p>
                    </div>

                    {/* Prix unitaire */}
                    <p className="f-14 text-gray-500 mt-3">Prix Unitaire: {cart.productPrice}$</p>

                    <div className="md:flex md:gap-5">
                      {/* Contrôle de la quantité */}
                      <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-5">
                        <p className="text-gray-500 f-15 font-700 cursor-pointer" onClick={() => decrease(cart.idCart)}>-</p>
                        <p className="f-15 font-700">{cart.quantity}</p>
                        <p className="f-15 font-700 cursor-pointer" onClick={() => increase(cart.idCart)}>+</p>
                      </div>

                      {/* Lien pour supprimer un produit du panier */}
                      <div className="mt-5">
                        <a href="#" className="underline text-gray-500 font-700" onClick={() => handleDeleteProductInCart(cart.idCart)}>Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-3" />
              </div>
            ))}
          </section>

        </div>
      </main>

      <Footer />

      <ToastContainer />
    </div>
  );
}
