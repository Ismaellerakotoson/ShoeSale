import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import HeaderNoNotif from '../../layouts/HeaderNoNotif';
import Footer from '../../layouts/Footer';
import TypewriterText from '../../components/TypewriterText';

import hero from '../../assets/images/hero-img.png';
import '../../assets/theme.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const exploreRef = useRef(null);

  // Récupère les produits à l'affichage initial du composant
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

  // Redirige vers la page de détail du produit
  const handleClick = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };

  // Scroll vers la section produits
  const handleShopNowClick = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='index'>
      <HeaderNoNotif />

      <div className="container mx-auto p-5 overflow-hidden lg:w-[77%]">
        {/* Section Hero d'introduction */}
        <motion.div
          className="heros flex flex-col text-center items-center bg-hero p-3 rounded-3xl mx-auto lg:items-start lg:text-left lg:flex-row lg:py-10 lg:px-5"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image mobile (affichée uniquement sur petits écrans) */}
          <div className="flex-1 lg:hidden">
            <motion.img
              src={hero}
              alt="hero"
              className="w-208 mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Texte promo à gauche */}
          <div className="flex-1 lg:ml-5 lg:mt-10">
            <motion.p
              className="text-orange f-36"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              25 % off
            </motion.p>
            <motion.p
              className="f-48 font-bold"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              summer sale
            </motion.p>
            <motion.p
              className="f-14 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Discover our summer styles with discount
            </motion.p>

            {/* Bouton d'action */}
            <motion.div
              className="text-white bg-black mt-10 lg:w-[45%] rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button className="p-button" onClick={handleShopNowClick}>Shop now</button>
            </motion.div>
          </div>

          {/* Image desktop (affichée uniquement sur grands écrans) */}
          <div className="flex-1 hidden lg:block">
            <motion.img
              src={hero}
              alt="hero"
              className="w-490 mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Section Produits */}
        <motion.article
          ref={exploreRef}
          className="overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Titre animé façon machine à écrire */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <TypewriterText text="Explore our latest drops" speed={80} />
          </motion.div>

          {/* Liste de produits défilable horizontalement */}
          <div className="mt-5 flex gap-3 md:gap-5 overflow-x-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="h-390 min-w-[200px] cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                {/* Carte du produit avec animation au survol */}
                <motion.div
                  className="w-[200px] bg-product rounded-lg lg:w-[260px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => handleClick(product.idProduct)}
                >
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.nameProduct}
                    className="w-full h-48 object-cover rounded"
                  />
                </motion.div>

                {/* Description du produit */}
                <div className="product-desc mt-4">
                  <p className="font-bold">{product.brand}</p>
                  <p className="f-14 text-gray-500">{product.nameProduct}</p>
                  <p className="font-weight-500 mt-2">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>

      <Footer />
    </div>
  );
}
