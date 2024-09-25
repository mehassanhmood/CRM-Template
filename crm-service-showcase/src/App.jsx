import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import CRMFeatures from './components/CRMFeatures'
import CRMWorkflow from './components/CRMWorkflow'
import CRMDashboard from './components/CRMDashboard'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CRMFeatures />
                <CRMWorkflow />
                <CRMDashboard />
                <Pricing />
              </>
            } />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App