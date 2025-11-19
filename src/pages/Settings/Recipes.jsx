import { useState } from 'react'

function Recipes() {
  const totalItems = 0 // No data initially

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-6">Recipes</h1>

      {/* Informational Text */}
      <div className="bg-primary-light rounded-lg border border-accent-blue p-6 mb-6">
        <p className="text-gray-300 mb-4">
          Recipes are needed for every Internal Spirit Type. Create a new Recipe by Creating a New Internal Spirit Type in Setup.
        </p>
        <p className="text-gray-300 mb-4">
          If the spirit going into the bottle is just the distilled or aged spirit and water, DO NOT edit the default recipe. If the Internal Spirit Type is created by blending other spirits together with other Blending Ingredients (example, combining CNS with apple flavoring to create Apple Moonshine), Edit the recipe below to add the Standard Batch Size, Other Internal Spirit Types Used in the Batch, and the Standard Proof Gallons used of those internal Spirit Types to make a Batch.
        </p>
        <p className="text-gray-300 font-semibold">
          Important Note: Redistilling one spirit to create another spirit (example, Vodka re-distilled into Gin) is NOT managed via a Recipe. Use the New Distillation Run tool for re-distilling spirits.
        </p>
      </div>

      {/* Recipes Table */}
      <div className="bg-primary-light rounded-lg border border-accent-blue shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-accent-blue">
            <thead className="bg-primary-DEFAULT">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Recipe Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Standard Batch Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Sort Order
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-light divide-y divide-accent-blue">
              {totalItems === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-400">
                    No data available
                  </td>
                </tr>
              ) : (
                // Render data rows here when available
                // Example structure:
                // <tr>
                //   <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Recipe Name</td>
                //   <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                //     <div className="flex items-center">
                //       <span className="mr-2">1.00</span>
                //       <input type="checkbox" checked className="..." />
                //     </div>
                //   </td>
                //   <td className="px-6 py-4 whitespace-nowrap text-sm text-white">1</td>
                //   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                //     <div className="flex space-x-2">
                //       <button className="text-accent-gold hover:text-accent-gold-light">Edit</button>
                //       <span className="text-gray-500">|</span>
                //       <button className="text-accent-gold hover:text-accent-gold-light">Delete</button>
                //     </div>
                //   </td>
                // </tr>
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Status Messages */}
        <div className="mt-8 pt-6 border-t border-accent-blue flex flex-wrap gap-6 text-sm px-6 pb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-400">Locked due to incomplete prerequisites.</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-gray-400">Open for editing and not populated.</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-400">Open for editing but populated.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes
