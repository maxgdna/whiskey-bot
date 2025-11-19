function BaseTaxRates() {
  const totalItems = 0 // No data initially

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-6">Manage Base Tax Rates</h1>

      {/* Informational Text */}
      <div className="bg-primary-light rounded-lg border border-accent-blue p-6 mb-6">
        <p className="text-gray-300 mb-2">
          Base tax rates are applied to ALL spirits unless a custom rate is set. Changing these rates will have a profound impact on tax calculations! The rate with the most recent
        </p>
        <p className="text-gray-300 mb-2">
          Edits are NOT retroactive to previously calculated tax accruals. To apply a changed rate, you must unship and reship an order, or re-enter tax paid TIBs, taxable losses, et
        </p>
        <p className="text-gray-300">
          Start dates begin at 12:00 AM, and the previous rate is considered active until this time. Please DO NOT DELETE or MODIFY rates added by WS Setup unless advised by s
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium">
          Export to Excel
        </button>
        <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium">
          Export to PDF
        </button>
        <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium">
          Add New
        </button>
        <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium">
          Cancel Changes
        </button>
        <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium">
          Save Changes
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-primary-light rounded-lg border border-accent-blue shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-accent-blue">
            <thead className="bg-primary-DEFAULT">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rate 1
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rate 1 Ceiling
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rate 2
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rate 2 Ceiling
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Rate 3
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  PF Ceiling
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-light divide-y divide-accent-blue">
              {totalItems === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-gray-400">
                    No data available
                  </td>
                </tr>
              ) : (
                // Render data rows here when available
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BaseTaxRates
