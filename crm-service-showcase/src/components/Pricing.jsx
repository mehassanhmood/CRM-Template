import React from 'react'

function Pricing() {
  const plans = [
    { name: 'Starter', price: '$29', features: ['Up to 1,000 contacts', 'Basic reporting', 'Email support'] },
    { name: 'Professional', price: '$79', features: ['Up to 10,000 contacts', 'Advanced reporting', 'Priority support'] },
    { name: 'Enterprise', price: '$199', features: ['Unlimited contacts', 'Custom reporting', 'Dedicated account manager'] },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plans for businesses of all sizes
          </p>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <span className="text-blue-500 mr-3">✓</span>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="mt-8 block w-full bg-blue-500 border border-blue-500 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-600">
                Select {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing