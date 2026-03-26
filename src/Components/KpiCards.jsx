import React from 'react';
import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react';

function KpiCards({ orders, customerCount }) {
  // 1. DYNAMIC CALCULATIONS
  // Calculate total revenue by summing up all order amounts
  const totalRevenue = orders.reduce((acc, curr) => acc + curr.amount, 0);
  
  // Total number of orders currently in the state
  const totalOrders = orders.length;

  // Calculate Average Order Value (AOV) - avoid division by zero
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

  // Count unique customers
  const uniqueCustomers = new Set(orders.map(order => order.customer)).size;

  // 2. DATA ARRAY FOR RENDERING
  const stats = [
    {
      label: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <DollarSign className="text-green-600" />,
      bgColor: 'bg-green-100',
    },
    {
      label: 'Total Orders',
      value: totalOrders,
      icon: <ShoppingBag className="text-blue-600" />,
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Avg. Order Value',
      value: `$${avgOrderValue}`,
      icon: <TrendingUp className="text-purple-600" />,
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Unique Customers',
      value: uniqueCustomers,
      icon: <Users className="text-orange-600" />,
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className={`p-3 rounded-xl ${stat.bgColor}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
          </div>
        </div>
      ))}
 
      {/* Customer Card - NEW */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
           <Users />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Total Customers</p>
          <h3 className="text-2xl font-bold">{customerCount}</h3>
        </div>
      </div>

      {/* ... (Orders Card) */}
    </div>
  );
}

export default KpiCards;