import React, { useState } from 'react';
import { Search, Filter, Trash2, Eye } from 'lucide-react';

const Orders = () => {
  // 1. Create state for the orders list
  const [orders, setOrders] = useState([
    { id: '#1024', customer: 'Aarav Sharma', amount: '$250', status: 'Paid', date: 'Mar 25, 2026' },
    { id: '#1023', customer: 'Jane Smith', amount: '$120', status: 'Pending', date: 'Mar 24, 2026' },
    { id: '#1022', customer: 'John Doe', amount: '$450', status: 'Shipped', date: 'Mar 22, 2026' },
  ]);

  // 2. Create state for the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Logic: Filter orders based on customer name or ID
  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.includes(searchTerm)
  );

  // Logic: Add a new order
  const handleCreateOrder = () => {
    const newId = `#${1025 + orders.length}`;
    const newOrder = {
      id: newId,
      customer: 'New Customer',
      amount: `$${Math.floor(Math.random() * 500)}`,
      status: 'Pending',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setOrders([newOrder, ...orders]); // Add new order to the top
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Shipped': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Order Management</h1>
        <button 
          onClick={handleCreateOrder} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Create New Order
        </button>
      </div>

      {/* Search Bar linked to state */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-4 justify-between shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input 
            type="text" 
            placeholder="Search by ID or customer..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Order ID</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Amount</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-blue-600">{order.id}</td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3 text-gray-400">
                    <button className="hover:text-blue-600"><Eye size={18} /></button>
                    <button 
                      onClick={() => setOrders(orders.filter(o => o.id !== order.id))}
                      className="hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="p-10 text-center text-gray-500">No orders found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
};

export default Orders;