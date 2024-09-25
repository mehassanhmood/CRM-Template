import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const caseStudies = [
  {
    title: 'E-commerce Growth',
    description: 'Implemented CRM strategy for an e-commerce client, resulting in significant growth.',
    beforeData: [
      { name: 'Sales', value: 4000 },
      { name: 'Retention', value: 60 },
      { name: 'Satisfaction', value: 70 },
    ],
    afterData: [
      { name: 'Sales', value: 8000 },
      { name: 'Retention', value: 80 },
      { name: 'Satisfaction', value: 90 },
    ],
  },
  {
    title: 'B2B Lead Generation',
    description: 'Optimized CRM for a B2B company, dramatically increasing qualified leads.',
    beforeData: [
      { name: 'Leads', value: 100 },
      { name: 'Conversion', value: 20 },
      { name: 'Revenue', value: 5000 },
    ],
    afterData: [
      { name: 'Leads', value: 300 },
      { name: 'Conversion', value: 35 },
      { name: 'Revenue', value: 15000 },
    ],
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real-world examples of our CRM implementations
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-gray-50 shadow rounded-lg p-6">
            <div className="flex space-x-4 mb-6">
              {caseStudies.map((study, index) => (
                <button
                  key={study.title}
                  className={`px-4 py-2 rounded-md ${
                    activeCase === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  {study.title}
                </button>
              ))}
            </div>

            <div className="transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {caseStudies[activeCase].title}
              </h3>
              <p className="text-gray-600 mb-6">{caseStudies[activeCase].description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Before Implementation</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={caseStudies[activeCase].beforeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#9CA3AF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">After Implementation</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={caseStudies[activeCase].afterData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#60A5FA" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}