import React, { useEffect, useState } from 'react'
import cart from '../assets/images/cart.png'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ViewCartNoNotif({ idUser }) {
  // Fonction principale du composant affichant le panier sans notification pour la page home et product

  const navigate = useNavigate();
  const storedIdUser = localStorage.getItem("idUser");
  const finalIdUser = idUser || storedIdUser;

  // Gère la navigation vers la page panier si un utilisateur est identifié
  const navigateToBag = () => {
    if (finalIdUser) {
      navigate(`/bag/${finalIdUser}`);
    } else {
      console.warn("Annulation de la navigation");
    }
  };

  // Effet qui récupère le nombre de produits dans le panier au chargement et à chaque changement d'utilisateur
  useEffect(() => {
    if (finalIdUser) {
      getProductNumber(finalIdUser);
    }
  }, [finalIdUser]);

  // Appelle l'API pour obtenir le nombre total d'articles dans le panier de l'utilisateur
  const getProductNumber = async (idUser) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/product/cartCount/${idUser}`);
      console.log("Réponse API :", res.data);
      setProductCount(res.data.totalItems); // Met à jour le nombre d'articles (state non défini ici)
    } catch (error) {
      console.log("Erreur lors de la récupération du panier :", error);
    }
  };

  return (
    <div className="flex items-center border border-black rounded-lg px-4 py-2 cursor-pointer">
      <img src={cart} alt="cart" className="w-4 h-auto mr-3" />
      <p className="capitalize text-sm font-bold">
        <div className='flex relative justify-between'>
          <div
            className="text-gray-800 cursor-pointer group-hover:text-white"
            onClick={navigateToBag}
          >
            view cart
          </div>
        </div>
      </p>
    </div>
  );
}
