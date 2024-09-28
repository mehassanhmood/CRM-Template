import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

const initialNodes = [
  {
    id: 'crm',
    type: 'input',
    data: { label: 'CRM System' },
    position: { x: 250, y: 25 },
  },
  {
    id: 'email',
    data: { label: 'Email Marketing (Mailchimp)' },
    position: { x: 100, y: 125 },
  },
  {
    id: 'ecommerce',
    data: { label: 'E-commerce (Shopify)' },
    position: { x: 250, y: 200 },
  },
  {
    id: 'support',
    data: { label: 'Customer Support (Zendesk)' },
    position: { x: 400, y: 125 },
  },
];

const initialEdges = [
  { id: 'crm-email', source: 'crm', target: 'email', animated: true },
  { id: 'crm-ecommerce', source: 'crm', target: 'ecommerce', animated: true },
  { id: 'crm-support', source: 'crm', target: 'support', animated: true },
];

export default function CRMIntegrationMap() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <div className="py-12 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-950 sm:text-4xl">
            CRM Integration Map
          </h2>
          <p className="mt-4 text-xl text-teal-900">
            Explore how our CRM system integrates with various tools
          </p>
        </div>

        <div className="mt-10 bg-zinc-50 shadow rounded-lg p-6" style={{ height: 400 }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}