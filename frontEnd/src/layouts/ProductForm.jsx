import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import axios from 'axios'

export default function ProductForm({ setIsOpen }) {
  const [nameProduct, setNameProduct] = useState("")
  const [price, setPrice] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [features, setFeatures] = useState(["", "", ""])
  const [quantity, setQuantity] = useState(0)
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")

  const handleFeatureChange = (index, value) => {
    const updated = [...features]
    updated[index] = value
    setFeatures(updated)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const productData = {
      nameProduct,
      price,
      brand,
      description,
      features,
      quantity,
      image,
      date,
    }

    try {
      const res = await axios.post("http://localhost:5000/api/product/addProduct", productData)
      alert("Produit ajouté avec succès !")
      setIsOpen(false)
    } catch (err) {
      console.error(err)
      alert("Erreur lors de l'ajout du produit.")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-blue-600 font-semibold text-lg border-b pb-2 mb-6">Ajouter un Produit</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Product name */}
          <div>
            <label className="text-sm text-gray-600">Product name</label>
            <input
              type="text"
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
              placeholder="Ajoutez un titre ici"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="text-sm text-gray-600">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Ajoutez une Brand"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm text-gray-600">Price</label>
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Prix"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 pr-12"
              />
              <span className="absolute right-3 top-3 text-sm text-gray-500">EUR</span>
            </div>
          </div>

          {/* Features */}
          {features.map((f, i) => (
            <div key={i}>
              <label className="text-sm text-gray-600">Feature {i + 1}</label>
              <div className="relative">
                <input
                  type="text"
                  value={f}
                  onChange={(e) => handleFeatureChange(i, e.target.value)}
                  className="w-full mt-1 border border-green-500 rounded px-3 py-2 pr-8"
                />
                <CheckCircle className="absolute right-2 top-3 text-green-500 w-5 h-5" />
              </div>
            </div>
          ))}

          {/* Image */}
          <div>
            <label className="text-sm text-gray-600">Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="URL de l'image"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm text-gray-600">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Description */}
        <div className='w-full mt-6'>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className='flex gap-10 mt-6'>
          <button
            onClick={() => setIsOpen(false)}
            className='bg-red-200 w-[150px] px-4 py-2 border border-red-500'
            type='button'
          >
            Annuler
          </button>
          <button
            className='bg-blue-200 w-[150px] px-4 py-2 border border-blue-500'
            type='submit'
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  )
}
