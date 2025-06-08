import React, { useState, useEffect } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ViewCart from '../../components/ViewCart';

export default function Product() {
  const { id } = useParams();
  const [idUser, setIdUser] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [message, setMessage] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // null instead of empty string
  const [features, setFeatures] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/oneProduct/${id}`);
        const data = res.data?.product;

        if (!data) {
          setMessage("Produit introuvable.");
          return;
        }

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

  const handleSubmitCart = async (e) => {
    e.preventDefault();
    try {
      console.log({ idUser, idProduct: id, quantity, price })
      await axios.post("http://localhost:5000/api/product/addToCart", {
        idUser,
        idProduct: id,
        quantity,
        price,
      });
      setMessage("Le produit a été ajouté au panier.");
      console.log("ID sélectionné :", idUser);
      navigate(`/bag/${idUser}`);
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'ajout au panier.");
    }
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

   const handleClick = (id)=>{
        console.log("id selection",id);
    }

  return (
    <div id="Product">
      <Header idUser={idUser}/>
      <div className="contain p-5 lg:mx-[12%]">
        <div className="block">
          <form onSubmit={handleSubmitCart} className="md:flex gap-5">
            <section className="product-img w-full md:w-[50%]">
              <div className="w-full h-full">
                {image ? (
                  <img
                    src={`http://localhost:5000/uploads/${image}`}
                    alt="product-img"
                    className="h-full w-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="bg-gray-100 h-64 flex items-center justify-center rounded-xl text-gray-400">Image non disponible</div>
                )}
              </div>
            </section>

            <section className="box-shadow shadow-xl rounded-3xl md:w-[50%]">
              <div className="product-desc mt-3 lg:mt-10 border-b-2 border-gray-200 p-5">
                <input type="hidden" value={idUser || ''} onChange={(e) => setIdUser(e.target.value)} />
                <h2 className="font-bold text-xl mb-2">{nameProduct}</h2>
                <p className="text-gray-500 mb-4">{description}</p>
                <p className="font-semibold text-lg">$ {price}</p>
              </div>

              <div className="p-5">
                <p className="mb-2">Quantité</p>
                <div className="flex border pt-1 pl-3 pb-1 pr-3 gap-5 w-fit rounded-lg mt-3">
                  <button type="button" className="text-gray-500" onClick={decrease}>-</button>
                  <input
                    type="number"
                    min="1"
                    className="w-12 text-center border-x"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button type="button" onClick={increase}>+</button>
                </div>

                <div className="text-white bg-black mt-8 px-6 py-2 rounded-lg text-center w-full">
                  <button type="submit">Ajouter au panier</button>
                </div>
                {message && <p className="mt-4 text-green-600">{message}</p>}
              </div>
            </section>
          </form>
        </div>

        <div className="block pt-5 md:flex w-full gap-6">
          <section className="md:w-[50%] mt-10">
            <h3 className="font-semibold text-xl mb-2">Description</h3>
            <hr className="border-t-2 border-gray-200" />
            <p className="text-gray-500 mt-3">{description}</p>
           <ul className="text-gray-500 mt-3 list-disc ml-6">
           {features && (() => {
              try {
                const parsedFeatures = JSON.parse(features);
                return Array.isArray(parsedFeatures)
                  ? parsedFeatures.map((item, index) => <li key={index}>{item}</li>)
                  : null;
              } catch (e) {
                console.error("Échec du parsing JSON de features:", e);
                return null;
              }
            })()}
          </ul>
          </section>

          <section className="w-full mt-5 md:w-[50%]">
            {image ? (
              <img src={`http://localhost:5000/uploads/${image}`} alt="product-img" className="h-full w-full object-cover rounded-xl" />
            ) : (
              <div className="bg-gray-100 h-64 flex items-center justify-center rounded-xl text-gray-400">Image non disponible</div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
