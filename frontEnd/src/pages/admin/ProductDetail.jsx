import React from 'react'
import NavBar from '../../layouts/NavBar'
import TopAdmin from '../../components/TopAdmin'

export default function ProductDetail() {
  // Exemple de produit (peut être remplacé par des props ou useParams + fetch)
  const product = {
    name: "Nike Air Max 270",
    image: "http://localhost:5173/src/assets/images/p4.png",
    price: "189.99 €",
    quantity: 12,
    size: "42",
    status: "disponible",
    description:
      "Les Nike Air Max 270 combinent style et confort avec une grande bulle d'air au talon pour un amorti optimal. Parfaites pour les amateurs de sneakers urbaines."
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:min-w-[300px] lg:block">
        <NavBar />
      </aside>

      <main className="flex-1 px-1 mt-3 mb-3 mr-3 bg-white md:px-3">
        <div className="flex justify-between items-center mb-4 max-w-90vw">
          <h1 className="text-2xl font-bold">Détail du produit</h1>
          <TopAdmin />
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row gap-6 p-4 border-gray-200 bg-white">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[300px] rounded-md object-cover"
            />
          </div>

          {/* Détails */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                <div>
                    <p className="text-green-400 mb-2 capitalize">{product.status}</p>
                </div>
              <div><span className="font-semibold text-3xl text-logo">{product.price}</span></div>
              <div><span className="font-semibold">Quantité disponible :</span> {product.quantity}</div>
              <div><span className="font-semibold">Taille :</span> {product.size}</div>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Modifier le produit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
