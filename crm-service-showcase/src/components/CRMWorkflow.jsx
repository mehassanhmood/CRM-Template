import React from 'react';

export default function CRMWorkflow() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            CRM Workflow Diagrams
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Visualize how our CRM system streamlines your business processes
          </p>
        </div>

        <div className="mt-10 flex flex-col space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Journey Flowchart</h3>
            <svg className="w-full" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="80" width="120" height="40" rx="20" fill="#60A5FA" />
              <text x="70" y="105" textAnchor="middle" fill="white" fontSize="14">Lead Generation</text>
              <path d="M130 100 L190 100" stroke="#4B5563" strokeWidth="2" />
              <rect x="190" y="80" width="120" height="40" rx="20" fill="#34D399" />
              <text x="250" y="105" textAnchor="middle" fill="white" fontSize="14">Qualification</text>
              <path d="M310 100 L370 100" stroke="#4B5563" strokeWidth="2" />
              <rect x="370" y="80" width="120" height="40" rx="20" fill="#F59E0B" />
              <text x="430" y="105" textAnchor="middle" fill="white" fontSize="14">Sales Process</text>
              <path d="M490 100 L550 100" stroke="#4B5563" strokeWidth="2" />
              <rect x="550" y="80" width="120" height="40" rx="20" fill="#EC4899" />
              <text x="610" y="105" textAnchor="middle" fill="white" fontSize="14">Customer Support</text>
              <path d="M670 100 L730 100" stroke="#4B5563" strokeWidth="2" />
              <rect x="730" y="80" width="60" height="40" rx="20" fill="#8B5CF6" />
              <text x="760" y="105" textAnchor="middle" fill="white" fontSize="14">Retention</text>
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Workflow Diagram</h3>
            <svg className="w-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="350" y="10" width="100" height="40" rx="20" fill="#60A5FA" />
              <text x="400" y="35" textAnchor="middle" fill="white" fontSize="14">New Lead</text>
              <path d="M400 50 L400 80" stroke="#4B5563" strokeWidth="2" />
              <rect x="300" y="80" width="200" height="40" rx="20" fill="#34D399" />
              <text x="400" y="105" textAnchor="middle" fill="white" fontSize="14">Automated Email Sequence</text>
              <path d="M400 120 L400 150" stroke="#4B5563" strokeWidth="2" />
              <rect x="300" y="150" width="200" height="40" rx="20" fill="#F59E0B" />
              <text x="400" y="175" textAnchor="middle" fill="white" fontSize="14">Lead Scoring</text>
              <path d="M400 190 L400 220" stroke="#4B5563" strokeWidth="2" />
              <rect x="300" y="220" width="200" height="40" rx="20" fill="#EC4899" />
              <text x="400" y="245" textAnchor="middle" fill="white" fontSize="14">Task Assignment</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}