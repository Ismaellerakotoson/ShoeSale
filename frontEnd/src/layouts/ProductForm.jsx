import React from 'react'
import { CheckCircle, MapPin, X } from 'lucide-react'

export default function ProductForm({setIsOpen}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-blue-600 font-semibold text-lg border-b pb-2 mb-6">INPUT FIELDS</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Normal */}
          <div>
            <label className="text-sm text-gray-600">Normal</label>
            <input
              type="text"
              placeholder="Placeholder text"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
            <p className="text-xs text-gray-400 mt-1">Helper text (optional)</p>
          </div>

          {/* Disabled */}
          <div>
            <label className="text-sm text-gray-600">Disable</label>
            <input
              type="text"
              disabled
              placeholder="Placeholder text"
              className="w-full mt-1 border border-gray-300 bg-gray-100 text-gray-400 rounded px-3 py-2"
            />
            <p className="text-xs text-gray-400 mt-1">Helper text (optional)</p>
          </div>

          {/* Read only */}
          <div>
            <label className="text-sm text-gray-600">Read only</label>
            <div className="relative">
              <input
                type="text"
                readOnly
                defaultValue="2000.00"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 pr-12"
              />
              <span className="absolute right-3 top-3 text-sm text-gray-500">EUR</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Helper text (optional)</p>
          </div>

          {/* Active */}
          <div>
            <label className="text-sm text-gray-600">Active</label>
            <input
              type="text"
              defaultValue="myemail@gm"
              className="w-full mt-1 border border-blue-500 rounded px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Complete */}
          <div>
            <label className="text-sm text-gray-600">Complete</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="Input text"
                className="w-full mt-1 border border-green-500 rounded px-3 py-2 pr-8"
              />
              <CheckCircle className="absolute right-2 top-3 text-green-500 w-5 h-5" />
            </div>
          </div>

          {/* Error */}
          <div>
            <label className="text-sm text-gray-600">Error</label>
            <input
              type="text"
              defaultValue="myemail@gmail.com"
              className="w-full mt-1 border border-red-500 text-red-600 rounded px-3 py-2"
            />
            <p className="text-xs text-red-500 mt-1">Error text</p>
          </div>

          {/* Autocomplete */}
          <div className="col-span-1 relative">
            <label className="text-sm text-gray-600">Autocomplete</label>
            <div className="relative mt-1">
              <input
                type="text"
                defaultValue="Kyiv, Ukraine"
                className="w-full border border-blue-500 rounded px-10 py-2"
              />
              <MapPin className="absolute left-3 top-2.5 text-blue-500 w-5 h-5" />
              <X className="absolute right-3 top-2.5 text-gray-500 w-4 h-4 cursor-pointer" />
            </div>
            <div className="border mt-1 rounded shadow-sm bg-white">
              {['Kyiv, Ukraine', 'Ukraine, Kyiv', 'Kyivskaya oblast’, Kyiv'].map((item, i) => (
                <div key={i} className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              defaultValue="2019-12-11"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
            <p className="text-xs text-gray-400 mt-1">Helper text (optional)</p>
          </div>

          {/* Value */}
          <div>
            <label className="text-sm text-gray-600">Value</label>
            <div className="flex items-center border border-gray-300 rounded mt-1">
              <button className="px-3 text-gray-500">−</button>
              <input
                type="number"
                defaultValue={950}
                className="w-full text-center border-l border-r px-3 py-2"
              />
              <button className="px-3 text-gray-500">+</button>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              defaultValue="password"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button onClick={()=>setIsOpen()} className='bg-red-500'>okok</button>
        </div>
      </div>
    </div>
  )
}
