function StartingOnsiteBarrels() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-6">Upload Barrel Data</h1>

      <div className="bg-primary-light rounded-lg border border-accent-blue p-6">
        <p className="text-gray-300 mb-6">
          To upload your starting barrel inventory to Whiskey Systems Online, please follow these 3 steps:
        </p>

        <ol className="list-decimal list-inside space-y-4 mb-6 text-gray-300">
          <li>
            <a href="#" className="text-accent-gold hover:text-accent-gold-light underline">
              Download the Barrel Upload Template.
            </a>
          </li>
          <li>
            Fill in the barrel upload template with your data. Detailed instructions can be found{' '}
            <a href="#" className="text-accent-gold hover:text-accent-gold-light underline">
              here
            </a>
            .
          </li>
          <li>
            Send the completed template to{' '}
            <a href="mailto:support@whiskeysystems.com" className="text-accent-gold hover:text-accent-gold-light underline">
              support@whiskeysystems.com
            </a>
            .
          </li>
        </ol>

        <p className="text-gray-300 mb-6">
          Whiskey Systems Support will upload your data free of charge. If you need to make additional uploads, download a fresh template and submit it again, with only the new barrels.
        </p>

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

export default StartingOnsiteBarrels
