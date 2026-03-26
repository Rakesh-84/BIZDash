import React from 'react';
import { useState } from 'react';
import OrdersTable from '../Components/OrdersTable';
import KpiCards from '../Components/KpiCards'; // Import these as you build them
import SalesChart from '../Components/SalesChart'
import { orders as initialOrders } from '../data/Orders';
import { initialCustomers } from '../data/Customers';
import { Mail, ArrowRight } from 'lucide-react';
function Dashboard() {
  // The data lives here now!

  const addNewOrder = (customerName, amount) => {
    const newOrder = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1001, // Auto-increment ID
      customer: customerName,
      amount: amount,
      status: "Pending" // New orders usually start as pending
    };
    setData([...data, newOrder]);
  }
  const [data, setData] = useState(initialOrders);
  const [customers] = useState(initialCustomers);
 
  // Logic to delete an order
  const handleDelete = (id) => {
    const updatedData = data.filter((order) => order.id !== id);
    setData(updatedData);
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Sales Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            Download Report
          </button>
        </div>

        {/* Top Stats (Placeholder for later) */}
        
   <KpiCards orders={data} customerCount={customers.length}/> 

         
       
           {/* Add more placeholders if you like */}
        </div>
{/* Middle Section: Chart */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-lg font-semibold text-gray-700">Revenue Forecast</h2>
    <select className="text-sm border rounded p-1 text-gray-500">
      <option>Last 7 Days</option>
      <option>Last 30 Days</option>
    </select>
  </div>
  <div className="h-46 w-full">
    <SalesChart title="Revenue Trend"/> 
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          {/* You can also pass data to your chart later! */}
          <SalesChart title="Product Distribution" type="pie" />
        </div>
</div>
        {/* Main Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
          </div>
          
          <div className="p-4">
            {/* We pass limit={5} so the dashboard doesn't get too long */}
            <OrdersTable orders={data} onDelete={handleDelete}/>
          </div>
        </div>
 <button 
  onClick={() => addNewOrder("Rahul Verma", 200)}
  className="bg-green-600 text-white px-4 py-2 rounded shadow"
>
  Simulate New Purchase
</button>
      </div>
 
  );
}

export default Dashboard;
