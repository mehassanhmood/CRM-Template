import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">CRM Service</Link>
        </div>
        <div>
          <Link to="/" className="px-3 py-2 rounded hover:bg-blue-700">Home</Link>
          <Link to="/features" className="px-3 py-2 rounded hover:bg-blue-700">Features</Link>
          <Link to="/pricing" className="px-3 py-2 rounded hover:bg-blue-700">Pricing</Link>
          <Link to="/contact" className="px-3 py-2 rounded hover:bg-blue-700">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header