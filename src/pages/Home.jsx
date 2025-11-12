import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Raw Materials', path: '/raw-materials/receipts', color: 'from-blue-600 to-blue-800' },
  { name: 'Production', path: '/production/fermentation', color: 'from-amber-600 to-amber-800' },
  { name: 'Barrels', path: '/barrels/fill-barrels', color: 'from-yellow-600 to-yellow-800' },
  { name: 'Processing', path: '/processing/batching', color: 'from-purple-600 to-purple-800' },
  { name: 'Finished Products', path: '/finished-products/finished-goods-inventory', color: 'from-green-600 to-green-800' },
  { name: 'TTB Reports', path: '/logs-and-reports/ttb-reports', color: 'from-red-600 to-red-800' },
]

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-accent-gold mb-4">Welcome to Distillery Tracker</h1>
        <p className="text-gray-300 text-lg">
          Track your production and manage TTB reporting with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              block p-6 rounded-lg border border-accent-blue
              bg-gradient-to-br ${link.color}
              hover:scale-105 transition-smooth
              shadow-lg hover:shadow-xl
            `}
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{link.name}</h2>
            <p className="text-white text-opacity-80">Quick access</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-primary-light rounded-lg p-8 border border-accent-blue">
        <h2 className="text-2xl font-bold text-accent-gold mb-4">Getting Started</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Use the sidebar navigation to access all features of the Distillery Tracker. 
          Each section is organized by category to help you quickly find what you need.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Navigate using the sidebar menu on the left</li>
          <li>Click on categories to expand and see subcategories</li>
          <li>Use the quick links above to jump to common sections</li>
        </ul>
      </div>
    </div>
  )
}

export default Home

