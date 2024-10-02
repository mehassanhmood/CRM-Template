import React from 'react';
import { BarChart2, Users, Zap, Database, MessageCircle, PieChart } from 'lucide-react';

const features = [
  { icon: BarChart2, title: 'Sales Pipeline Automation', description: 'Streamline your sales process with automated workflows.' },
  { icon: Users, title: 'Customer Data Management', description: 'Centralize and organize all your customer information.' },
  { icon: Zap, title: 'Task Automation', description: 'Automate repetitive tasks to boost productivity.' },
  { icon: Database, title: 'Data Analytics', description: 'Gain insights from your CRM data with powerful analytics.' },
  { icon: MessageCircle, title: 'Communication Tools', description: 'Integrated tools for seamless customer communication.' },
  { icon: PieChart, title: 'Reporting', description: 'Generate comprehensive reports to track performance.' },
];

export default function CRMFeatures() {
  return (
    <div className="py-12 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-900 sm:text-4xl">
            CRM Implementation Features
          </h2>
          <p className="mt-4 text-xl text-teal-900">
            Discover the powerful features of our CRM implementation
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-zinc-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-teal-50" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-zinc-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-zinc-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}