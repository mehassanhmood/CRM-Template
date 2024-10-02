import React from 'react'

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'CAD $5,000 - $15,000',
      features: [
        'Basic contact management',
        'Lead tracking',
        'Task management',
        'Reporting'
      ]
    },
    {
      name: 'Mid-Level',
      price: 'CAD $15,000 - $50,000',
      features: [
        'Customizable dashboards',
        'Email integration',
        'Advanced reporting',
        'Mobile access'
      ]
    },
    {
      name: 'Advanced',
      price: 'CAD $50,000 - $150,000+',
      features: [
        'Advanced analytics',
        'Automation',
        'Third-party integrations',
        'Custom workflows'
      ]
    },
  ]

  return (
    <div className="py-12 bg-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-100 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-50 sm:text-4xl">
            CRM Solutions for Every Business Size
          </p>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative p-8 bg-zinc-50 border border-teal-100 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-teal-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-teal-900">
                  <span className="text-2xl font-extrabold tracking-tight">{plan.price}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <span className="text-teal-700 mr-3">✓</span>
                      <span className="text-teal-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="mt-8 block w-full bg-teal-700 border border-teal-700 rounded-md py-2 text-sm font-semibold text-teal-50 text-center hover:bg-teal-900">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing