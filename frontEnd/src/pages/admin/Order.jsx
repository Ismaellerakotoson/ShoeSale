import React from 'react'
import NavBar from '../../layouts/NavBar'
import TopAdmin from '../../components/TopAdmin'

const orders = [
  { id: 1, name: 'Smart watch', address: '351 Sherawood Forest Drive', date: '20/03/2021', price: '$376.00', status: 'Complete', image: '🧭' },
  { id: 2, name: 'Headphones', address: '6391 Elgin St. Celina', date: '21/03/2021', price: '$276.00', status: 'Pending', image: '🎧' },
  { id: 3, name: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '01/04/2021', price: '$300.00', status: 'Canceled', image: '📱' },
  { id: 4, name: 'Apple AirPods Pro', address: '4517 Washington Ave. Manchester', date: '01/04/2021', price: '$200.00', status: 'Complete', image: '🎧' },
  { id: 5, name: 'Nike Air Max', address: '3891 Ranchview Dr. Richardson', date: '02/04/2021', price: '$100.00', status: 'Complete', image: '👟' },
  { id: 6, name: 'Girls Bag', address: '2972 Westheimer Rd. Santa Ana', date: '02/04/2021', price: '$76.00', status: 'Pending', image: '👜' },
  { id: 7, name: 'Canon 600D', address: '3517 W. Gray St. Utica', date: '03/04/2021', price: '$500.00', status: 'Pending', image: '📷' },
  { id: 8, name: 'Apple Watch', address: '4140 Parker Rd. Allentown', date: '07/04/2021', price: '$300.00', status: 'Complete', image: '⌚' },
  { id: 9, name: 'Alexa Box', address: '2464 Royal Ln. Mesa', date: '09/04/2021', price: '$76.00', status: 'Complete', image: '📦' },
  { id: 10, name: 'Apple Macbook Air 13”', address: '3517 W. Gray St. Utica', date: '10/04/2021', price: '$600.00', status: 'Canceled', image: '💻' },
]

const getStatusColor = (status) => {
  switch (status) {
    case 'Complete':
      return 'text-green-600 bg-green-100'
    case 'Pending':
      return 'text-yellow-600 bg-yellow-100'
    case 'Canceled':
      return 'text-red-600 bg-red-100'
    default:
      return ''
  }
}

export default function Order() {
  return (
  <div className="flex flex-col md:flex-row min-h-screen mt-0">
    <aside className="hidden md:block md:min-w-[250px] lg:min-w-[300px]">
      <NavBar />
    </aside>

    <main className="flex-1 px-1 mt-3 mb-3 mr-3 bg-white md:px-3">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-xl md:text-2xl font-bold">Commandes</h1>
        <TopAdmin />
      </div>

      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h2 className="text-lg md:text-2xl font-semibold">
          Order <span className="text-gray-500 text-sm font-normal">15 Orders found</span>
        </h2>
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm">Mar – April, 2021</button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {['All orders', 'Completed', 'Pending', 'Cancel'].map((tab, idx) => (
          <button
            key={idx}
            className={`text-sm whitespace-nowrap ${
              idx === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="cards overflow-x-auto rounded-lg border">
        <table className="min-w-[600px] w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Date</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 cards">
                <td className="p-3">{order.id}</td>
                <td className="p-3">#78522135</td>
                <td className="p-3 flex items-center space-x-2">
                  <span className="text-xl">{order.image}</span>
                  <span>{order.name}</span>
                </td>
                <td className="p-3">{order.address}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.price}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-6 text-sm text-gray-500 gap-3">
        <p>Showing 1 to 10 of 100 entries</p>
        <div className="flex flex-wrap gap-1">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded-md ${page === 1 ? 'bg-blue-600 text-white' : ''}`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </main>
  </div>
  )
}
