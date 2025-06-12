import React, { useState, useEffect } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import left from '../../assets/images/left.png';
import HeaderNoNotif from '../../layouts/HeaderNoNotif';

export default function Product() {
  const { id } = useParams();

  // ID utilisateur (à modifier dynamiquement si nécessaire)
  const [idUser, setIdUser] = useState(4);

  // États du produit
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [message, setMessage] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [features, setFeatures] = useState('');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // Récupérer tous les produits pour le carrousel
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

  // Récupérer les détails d'un seul produit
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/oneProduct/${id}`);
        const data = res.data?.product;

        if (!data) {
          setMessage("Produit introuvable.");
          return;
        }

        // Mise à jour des états
        setNameProduct(data.nameProduct);
        setDescription(data.description);
        setPrice(data.price);
        setImage(data.image);
        setFeatures(data.features);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);
        setMessage("Erreur de chargement du produit.");
      }
    };

    fetchProduct();
  }, [id]);

  // Ajouter le produit au panier
  const handleSubmitCart = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/product/addToCart", {
        idUser,
        idProduct: id,
        quantity,
        price,
      });
      setMessage("Le produit a été ajouté au panier.");
      navigate(`/bag/${idUser}`);
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'ajout au panier.");
    }
  };

  // Incrémentation / Décrémentation de la quantité
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  // Animation Framer Motion
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Carrousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    image,
    ...products
      .filter(p => p._id !== id && p.image) // Exclure le produit actuel
      .slice(0, 2) // Max 2 autres images
      .map(p => p.image)
  ].filter(Boolean); // Supprimer les valeurs nulles

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) =>
      (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  // Affichage des caractéristiques du produit
  function FeatureList() {
    if (!features) return <li>Chargement...</li>;

    let cleanString = features
      .replace(/[\[\]"\\]/g, '')     // Nettoyer les caractères inutiles
      .replace(/\n/g, ',')           // Remplacer les retours à la ligne par des virgules
      .trim();

    let list = cleanString
      .split(',')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    if (list.length === 0) return <li>Aucune caractéristique</li>;

    return (
      <ul className="text-gray-500 mt-3 list-disc ml-6">
        {list.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    );
  }

  return (
    <motion.div
      id="Product"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen flex flex-col"
    >
      {/* En-tête sans notifications */}
      <HeaderNoNotif idUser={idUser} />

      <div className="contain p-5 lg:mx-[12%] flex-grow">
        <motion.div className="block" variants={itemVariants} initial="hidden" animate="visible">
          <form onSubmit={handleSubmitCart} className="md:flex gap-5">
            {/* Section Image */}
            <motion.section className="product-img w-full md:w-[50%]" variants={itemVariants}>
              <div className="w-full h-80 overflow-hidden rounded-xl relative">
                <motion.img
                  key={sliderImages[currentSlide]}
                  src={`http://localhost:5000/uploads/${sliderImages[currentSlide]}`}
                  alt="product-slide"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Contrôles carrousel */}
              <div className="mt-4 flex items-center justify-between px-4">
                <button
                  onClick={handlePrev}
                  className="bg-white/80 w-10 h-10 flex items-center justify-center rounded-full shadow"
                  type="button"
                >
                  ‹
                </button>
                <div className="flex gap-2 justify-center">
                  {sliderImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-white/80 w-10 h-10 flex items-center justify-center rounded-full shadow"
                  type="button"
                >
                  ›
                </button>
              </div>
            </motion.section>

            {/* Section Détails du Produit */}
            <motion.section
              className="box-shadow shadow-xl rounded-3xl md:w-[50%]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="product-desc mt-3 lg:mt-10 border-b-2 border-gray-200 p-5">
                <input type="hidden" value={idUser || ''} onChange={(e) => setIdUser(e.target.value)} />
                <motion.h2 className="font-bold text-xl mb-2" variants={fadeInUp} custom={0}>
                  {nameProduct}
                </motion.h2>
                <motion.p className="text-gray-500 mb-4" variants={fadeInUp} custom={1}>
                  {description}
                </motion.p>
                <motion.p className="font-semibold text-lg" variants={fadeInUp} custom={2}>
                  $ {price}
                </motion.p>
              </div>

              <div className="p-5">
                {/* Choix de quantité */}
                <motion.p className="mb-2" variants={fadeInUp} custom={3}>Quantité</motion.p>
                <motion.div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-3" variants={fadeInUp} custom={4}>
                  <button type="button" className="text-gray-500 cursor-pointer" onClick={decrease}>-</button>
                  <input
                    min="1"
                    className="w-12 text-center border-x"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button type="button" className='cursor-pointer' onClick={increase}>+</button>
                </motion.div>

                {/* Bouton Ajouter au panier */}
                <motion.div
                  className="text-white bg-black mt-10 text-center rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  variants={fadeInUp}
                  custom={5}
                >
                  <button className="p-button">Add to cart</button>
                </motion.div>

                {/* Message de succès/erreur */}
                {message && (
                  <motion.p className="mt-4 text-green-600" variants={fadeInUp} custom={6}>
                    {message}
                  </motion.p>
                )}
              </div>
            </motion.section>
          </form>
        </motion.div>

        {/* Section Description & Caractéristiques */}
        <motion.div className="block pt-5 md:flex w-full gap-6" variants={itemVariants}>
          <motion.section className="md:w-[50%] mt-10" variants={itemVariants}>
            <h3 className="font-semibold text-xl mb-2">Description</h3>
            <hr className="border-t-2 border-gray-200" />
            <p className="text-gray-500 mt-3">{description}</p>
            <FeatureList />
          </motion.section>

          <motion.section className="md:w-[50%] w-full mt-10" variants={itemVariants}>
            {image ? (
              <img
                src={`http://localhost:5000/uploads/${image}`}
                alt="product"
                className="rounded-xl w-full max-h-80 object-cover"
              />
            ) : null}
          </motion.section>
        </motion.div>
      </div>

      {/* Pied de page */}
      <Footer />
    </motion.div>
  );
}
