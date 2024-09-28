import React from 'react';
import { User, Mail, ShoppingCart, PhoneCall, Heart } from 'lucide-react';

const stages = [
  { icon: User, title: 'Awareness', description: 'Prospect becomes aware of your brand' },
  { icon: Mail, title: 'Consideration', description: 'Prospect engages with your content' },
  { icon: ShoppingCart, title: 'Purchase', description: 'Customer makes a purchase' },
  { icon: PhoneCall, title: 'Support', description: 'Customer receives post-purchase support' },
  { icon: Heart, title: 'Loyalty', description: 'Customer becomes a repeat buyer' },
];

export default function CustomerJourneyMap() {
  return (
    <div className="py-12 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-950 sm:text-4xl">
            Customer Journey Map
          </h2>
          <p className="mt-4 text-xl text-teal-950">
            See how our CRM system supports each stage of the customer lifecycle
          </p>
        </div>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-zinc-300" />
            </div>
            <div className="relative flex justify-between">
              {stages.map((stage, index) => (
                <div key={stage.title} className="text-center">
                  <span className="relative z-10 w-12 h-12 flex items-center justify-center bg-zinc-50 border-2 border-teal-500 rounded-full">
                    <stage.icon className="w-6 h-6 text-teal-500" />
                  </span>
                  <div className="mt-2">
                    <h3 className="text-lg font-medium text-zinc-900">{stage.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500 max-w-xs">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}