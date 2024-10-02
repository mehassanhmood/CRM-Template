import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import CRMFeatures from './components/CRMFeatures'
import CRMWorkflow from './components/CRMWorkflow'
import CRMDashboard from './components/CRMDashboard'
import CustomerJourneyMap from './components/CustomerJourneyMap'
import CRMIntegrationMap from './components/CRMIntegrationMap'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CRMFeatures />
                <CRMWorkflow />
                <CustomerJourneyMap />
                {/* <CRMDashboard /> */}
                {/* <CRMIntegrationMap /> */}
                {/* <CaseStudies /> */}
                <Pricing />
              </>
            } />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App