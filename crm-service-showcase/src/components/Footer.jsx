import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 CRM Service. All rights reserved.</p>
          </div>
          <div>
            <a href="#" className="px-2 hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="px-2 hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer