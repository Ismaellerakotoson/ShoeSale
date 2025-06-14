import React, { useEffect, useState } from 'react'
import cart from '../assets/images/cart.png'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ViewCart({ idUser }) {
  const navigate = useNavigate();
  const storedIdUser = localStorage.getItem("idUser");
  const finalIdUser = idUser || storedIdUser;

  // Fonction pour naviguer vers la page du panier si l'id utilisateur est disponible,
  const navigateToBag = () => {
    if (finalIdUser) {
      navigate(`/bag/${finalIdUser}`);
    } else {
      console.warn("Annulation de la navigation");
    }
  };

  const [productCount, setProductCount] = useState(0);

  // Permet de récupérer le nombre total de produits dans le panier via l'API
  useEffect(() => {
    if (finalIdUser) {
      getProductNumber(finalIdUser);
    }
  }, [finalIdUser]);

  // Recuperation de nombre d'articles dans le panier
  const getProductNumber = async (idUser) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/product/cartCount/${idUser}`);
      console.log("Réponse API :", res.data);
      setProductCount(res.data.totalItems); 
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
          onClick={navigateToBag} // déclenche la navigation vers la page panier
          >
            view cart
          </div>
          {/* Badge indiquant le nombre de produits dans le panier */}
          <div className="ml-2 -top-1 -right-1 notification text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
            {productCount}
          </div>
        </div>
      </p>
    </div>
  );
}
