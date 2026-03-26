import React, { useState } from 'react';

import { Trash2, Search } from 'lucide-react'; // Optional icons

function OrdersTable({ orders, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
 

  // 3. SEARCH LOGIC
const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toString().includes(searchTerm) // Also search by ID!
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      {/* Search Bar UI */}
      <div className="flex items-center gap-2 mb-4 bg-gray-50 p-2 rounded-lg border border-gray-200">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by customer name..."
          className="bg-transparent outline-none text-sm w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b uppercase text-xs">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4 font-semibold text-blue-600">#{order.id}</td>
                <td className="px-4 py-4">{order.customer}</td>
                <td className="px-4 py-4">${order.amount}</td>
                <td className="px-4 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
              <button 
       onClick={() => onDelete(order.id)} // 4. Call the function from Dashboard
       className="text-red-500"
    >
       <Trash2 size={18} />
    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;