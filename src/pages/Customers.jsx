import React, { useState } from 'react';
import { initialCustomers } from '../data/Customers';
import { UserPlus, Mail, DollarSign, Trash2 } from 'lucide-react';

function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Logic to add a customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const newCustomer = {
      id: Date.now(),
      name,
      email,
      totalSpent: 0,
      status: "New"
    };

    setCustomers([newCustomer, ...customers]);
    setName("");
    setEmail("");
  };

  // Logic to delete a customer
  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <UserPlus className="text-blue-600" /> Customer Management
      </h1>

      {/* Add Customer Form */}
      <form onSubmit={handleAddCustomer} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-\[200px]">
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
          <input 
            className="w-full mt-1 p-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="e.g. Robert Brown"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-\[200px]">
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Address</label>
          <input 
            className="w-full mt-1 p-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="robert@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all">
          Add Customer
        </button>
      </form>

      {/* Customer List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map(customer => (
          <div key={customer.id} className="bg-white p-5 rounded-xl border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                {customer.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{customer.name}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Mail size={14} /> {customer.email}
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                customer.status === 'VIP' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
              }`}>
                {customer.status}
              </span>
              <button onClick={() => deleteCustomer(customer.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
