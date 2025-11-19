function StartingOffsiteBarrels() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-6">Upload Offsite Barrel Data</h1>

      <div className="bg-primary-light rounded-lg border border-accent-blue p-6">
        <p className="text-gray-300 mb-4">
          Enter the starting month, always taken as the 1st of the month.
        </p>

        {/* Month Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Month
          </label>
          <div className="flex items-center">
            <input
              type="month"
              className="px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
            />
            <button
              type="button"
              className="ml-2 px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-300 hover:bg-primary-light"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Import Section */}
        <div className="mb-6">
          <p className="text-gray-300 mb-4">
            Select a local file below to upload existing barrel inventory at the start of the month. The selected file must follow the template.
          </p>

          <div className="border-2 border-dashed border-accent-blue rounded-lg p-8">
            <div className="flex flex-col items-center">
              <button className="px-4 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-300 hover:bg-primary-light transition-smooth mb-4">
                Select file to import...
              </button>
              <p className="text-gray-400 text-sm">Drop files here to upload</p>
            </div>
          </div>

          <div className="mt-4">
            <a href="#" className="text-accent-gold hover:text-accent-gold-light underline">
              Download Offsite Barrel Upload Template
            </a>
          </div>
        </div>

        {/* Footer Status Messages */}
        <div className="mt-8 pt-6 border-t border-accent-blue flex flex-wrap gap-6 text-sm">
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

export default StartingOffsiteBarrels
