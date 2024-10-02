import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const customerSegmentationData = [
  { name: 'New', value: 400 },
  { name: 'Returning', value: 300 },
  { name: 'VIP', value: 200 },
];

const retentionData = [
  { name: '0-3 months', retention: 70 },
  { name: '3-6 months', retention: 60 },
  { name: '6-12 months', retention: 50 },
  { name: '1-2 years', retention: 40 },
  { name: '2+ years', retention: 30 },
];

const pieColors = ['#14b8a6', '#0d9488', '#0f766e'];
const barColors = ['#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a'];

export default function CRMDashboard() {
  const [timeFrame, setTimeFrame] = useState('6M');

  return (
    <div className="py-12 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-900 sm:text-4xl">
            CRM Analytics Dashboard
          </h2>
          <p className="mt-4 text-xl text-teal-900">
            Interactive demo of CRM analytics and reporting capabilities
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-zinc-50 shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-teal-900">Sales Performance</h3>
              <select
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-teal-900 text-base border-zinc-50 focus:outline-none focus:ring-teal-900 focus:border-teal-900 sm:text-sm rounded-md"
              >
                <option value="6M">Last 6 Months</option>
                <option value="1Y">Last Year</option>
                <option value="ALL">All Time</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#0f766e" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-zinc-50 shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-teal-900 mb-4">Customer Segmentation</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={customerSegmentationData}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {customerSegmentationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-zinc-50 shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-teal-900 mb-4">Customer Retention Rates</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="retention" >
                    {retentionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}