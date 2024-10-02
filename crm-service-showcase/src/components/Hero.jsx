import React, { useState } from 'react';
import CRMDashboard from './CRMDashboard';
import CRMIntegrationMap from './CRMIntegrationMap';
import CaseStudies from './CaseStudies';

function Hero() {
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleComponent = (component) => {
    if (activeComponent === component) {
      setActiveComponent(null);
    } else {
      setActiveComponent(component);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <CRMDashboard />;
      case 'integrationMap':
        return <CRMIntegrationMap />;
      case 'caseStudies':
        return <CaseStudies />;
      default:
        return null;
    }
  };

  const getButtonClass = (component) => {
    const baseClass = "font-bold rounded-full py-2 px-4 shadow-lg uppercase tracking-wider transition-colors duration-200";
    return activeComponent === component
      ? `${baseClass} bg-teal-100 text-teal-700`
      : `${baseClass} bg-zinc-50 text-teal-700 hover:bg-teal-100`;
  };

  return (
    <div className="bg-teal-900 text-teal-50">
      <div className="container mx-auto px-6 text-center py-20">
        <h1 className="text-5xl font-bold mb-2">Transform Your Customer Relationships</h1>
        <h2 className="text-2xl mb-8">Powerful CRM Solutions for Growing Businesses</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => toggleComponent('dashboard')}
            className={getButtonClass('dashboard')}
          >
            Dashboard
          </button>
          <button
            onClick={() => toggleComponent('integrationMap')}
            className={getButtonClass('integrationMap')}
          >
            Integration Map
          </button>
          <button
            onClick={() => toggleComponent('caseStudies')}
            className={getButtonClass('caseStudies')}
          >
            Case Studies
          </button>
        </div>
      </div>
      {renderComponent()}
    </div>
  );
}

export default Hero;