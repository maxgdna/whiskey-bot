// Reusable page component for placeholder pages
function Page({ title, category }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-4">{title}</h1>
      {category && (
        <p className="text-accent-blue-light text-lg mb-6">{category}</p>
      )}
      <div className="bg-primary-light rounded-lg p-8 border border-accent-blue">
        <p className="text-gray-300 leading-relaxed">
          This is the <strong className="text-accent-gold">{title}</strong> page – functionality to be implemented.
        </p>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  )
}

export default Page

