import React, { useState } from 'react'
import NavBar from '../../layouts/NavBar'
import TopAdmin from '../../components/TopAdmin'
import { Pencil, Trash2, Eye } from 'lucide-react'
import ProductForm from '../../layouts/ProductForm'

export default function User() {
  const [isOpen , setIsOpen] = useState(false); 

  const clicked = ()=>{
    setIsOpen(false)
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:min-w-[300px] lg:block">
        <NavBar />
      </aside>

      <main className="flex-1 px-1 mt-3 mb-3 mr-3 bg-white md:px-3">
        <div className="flex justify-between items-center mb-4 max-w-90vw">
          <h1 className="text-2xl font-bold flex">Utilisateurs</h1>
          <TopAdmin />
        </div>

        {/* Boutons d'action */}
        <div className='flex gap-2 mb-4 flex-wrap'>
          <button className='px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600' onClick={() => {setIsOpen(!isOpen)}}>+ Add</button>
          <button className='px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600'>Delete</button>
          <button className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600'>Action</button>
        </div>

        {/* Tableau de produits */}
        <div className="overflow-auto rounded-md border border-gray-200">
          <table className="min-w-[700px] w-full text-sm text-left bg-white">
            <thead className="bg-gray-100 text-gray-600 capitalize text-xs">
              <tr>
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
                <th className="p-3">Permissions</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'Apple MacBook Air retina 8 gb',
                  price: '93122 Tk',
                  status: true,
                  permissions: ['Active', 'Inactive'],
                  img: 'https://i.imgur.com/MTZ9g2y.png'
                },
                {
                  name: 'Hamilton Cooker',
                  price: '12558 Tk',
                  status: true,
                  permissions: ['Create', 'Edit', 'Delete'],
                  img: 'https://i.imgur.com/EKyGE5S.png'
                },
              ].map((product, idx) => (
                <tr key={idx} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-3"><input type="checkbox" /></td>
                  <td className="p-3">
                    <img src={product.img} alt={product.name} className="w-10 h-10 object-cover rounded" />
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">
                    <span className={`inline-block w-4 h-4 rounded-full ${product.status ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  </td>
                  <td className="p-3 space-x-1">
                    {product.permissions.map((perm, i) => (
                      <span key={i} className={`px-2 py-0.5 rounded text-xs font-medium
                        ${perm === 'Create' ? 'bg-green-100 text-green-700' :
                          perm === 'Edit' ? 'bg-blue-100 text-blue-700' :
                          perm === 'Delete' ? 'bg-red-100 text-red-700' :
                          perm === 'Active' ? 'bg-green-200 text-green-800' :
                          'bg-gray-200 text-gray-800'}
                      `}>
                        {perm}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <Eye size={16} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                    <Pencil size={16} className="text-green-500 hover:text-green-700 cursor-pointer" />
                    <Trash2 size={16} className="text-red-500 hover:text-red-700 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {isOpen && 
      <div
        className="absolute top-0 left-0 flex justify-center items-center m-auto w-screen h-screen backdrop-blur-xs"
        onClick={() => setIsOpen(false)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <ProductForm setIsOpen={clicked} />
        </div>
      </div>

       
      }
    </div>
  )
}
