import { useState } from 'react'

function DSPSettingsAndInfo() {
  const [sameShippingAddress, setSameShippingAddress] = useState(true)
  const [activeTab, setActiveTab] = useState('Your DSP')

  const tabs = ['Your DSP', 'Tax Settings', 'Advanced', 'Financial Settings', 'Units', 'Logo']

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-accent-gold mb-6">DSP Settings and Info</h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 mb-6 border-b border-accent-blue">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-3 font-medium transition-smooth
              ${activeTab === tab
                ? 'text-accent-gold border-b-2 border-accent-gold bg-primary-light'
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Your DSP Tab */}
      {activeTab === 'Your DSP' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: DISTILLERY SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">DISTILLERY SETTINGS</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Country
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Country</option>
                    <option value="US">United States of America</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name Of Proprietor
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Does Business As
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Time Zone</option>
                    <option value="America/New_York">(-05:00) America/New_York</option>
                    <option value="America/Chicago">(-06:00) America/Chicago</option>
                    <option value="America/Denver">(-07:00) America/Denver</option>
                    <option value="America/Los_Angeles">(-08:00) America/Los_Angeles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Start Month
                  </label>
                  <input
                    type="month"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                  />
                </div>
              </div>

              {/* Submit and Clear Buttons */}
              <div className="mt-6 flex space-x-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-gold text-primary-dark rounded hover:bg-accent-gold-light transition-smooth font-medium"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 transition-smooth font-medium"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Middle Column: BILLING/OFFICE ADDRESS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">BILLING/OFFICE ADDRESS</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Address 1
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State/Region
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="same-shipping"
                    checked={sameShippingAddress}
                    onChange={(e) => setSameShippingAddress(e.target.checked)}
                    className="w-4 h-4 text-accent-gold bg-primary-DEFAULT border-accent-blue rounded focus:ring-accent-gold focus:ring-2"
                  />
                  <label htmlFor="same-shipping" className="ml-2 text-sm text-gray-300">
                    Same Shipping Address
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: SHIPPING ADDRESS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">SHIPPING ADDRESS</h2>
              
              {!sameShippingAddress ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address 1
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      State/Region
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      placeholder=""
                    />
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm italic">Shipping address same as billing address</p>
              )}
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
        </form>
      )}

      {/* Tax Settings Tab */}
      {activeTab === 'Tax Settings' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: LICENSE SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">LICENSE SETTINGS</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    DSP Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    DSP Date Received
                  </label>
                  <div className="flex">
                    <input
                      type="date"
                      className="flex-1 px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    EIN
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State Tax Reg Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    State Lic Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Submit and Clear Buttons */}
              <div className="mt-6 flex space-x-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-gold text-primary-dark rounded hover:bg-accent-gold-light transition-smooth font-medium"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-smooth font-medium"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Right Column: TAX FORMS SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">TAX FORMS SETTINGS</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tax Payment
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Tax Payment</option>
                    <option value="QUARTERLY">QUARTERLY</option>
                    <option value="MONTHLY">MONTHLY</option>
                    <option value="ANNUAL">ANNUAL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Processing Line 66
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Production Part 2 Line 8
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Production Column K
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="quarterly-unfinished"
                    className="w-4 h-4 text-accent-gold bg-primary-DEFAULT border-accent-blue rounded focus:ring-accent-gold focus:ring-2"
                  />
                  <label htmlFor="quarterly-unfinished" className="ml-2 text-sm text-gray-300">
                    Quarterly Unfinished PCs
                  </label>
                </div>
              </div>
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
        </form>
      )}

      {/* Advanced Tab */}
      {activeTab === 'Advanced' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: ADVANCED SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">ADVANCED SETTINGS</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Year Evaporation Rate
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <span className="ml-2 text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">The expected barrel loss in year 1.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Evaporation Rate
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <span className="ml-2 text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">The expected barrel loss in years 2+.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Cut Yield
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="1"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <span className="ml-2 text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Average Percentage of Hearts Recovered 0 to 100 Default 80.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Average Pounds Per Bushel
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <span className="ml-2 text-gray-300">lbs/bu</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Your average Lbs/bushel of grain to use in yield calculations.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Distill Multiple Spirits
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="distill-multiple" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="distill-multiple" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Yes if each distillate may be set to a different spirit type, such as producing GNS and Vodka in one run.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Require Consumables
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="require-consumables" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="require-consumables" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Yes if each activity will require a consumable material be manually added. Used for individual labor or overhead tracking.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Consolidate Lines on TIB Out
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="consolidate-tib" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="consolidate-tib" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">If checked, similar containers will be grouped together and totals shown.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Packing List Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                  />
                  <p className="mt-1 text-xs text-gray-400">Overrides the default 'Packing List' title for Orders and Finished Good Transfers.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Packing List 'From Address'
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Address</option>
                    <option value="Billing">Billing</option>
                    <option value="Physical">Physical</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-400">Selects the address that will be printed on order packing lists. Choose billing or physical (shipping), from basic settings.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Treat Dumped Barrels
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Option</option>
                    <option value="Individual">Individual</option>
                    <option value="Generic">Generic</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-400">When dumping barrels, if you want to increase the raw material inventory for that empty barrel stock type, select Generic. To treat each dumped barrel as a unique asset (and not as a raw material where you can refill specific barrel numbers from the 'Manage Dumped Barrel History' page, select Individual. Most distilleries will choose Generic.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Transaction Post Date
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Option</option>
                    <option value="RollingTwoMonth">RollingTwoMonth</option>
                    <option value="Current">Current</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column: ACTIVITY NUMBERING */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">ACTIVITY NUMBERING</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Next Barrel Number' },
                  { label: 'Next Batching' },
                  { label: 'Next Bottling' },
                  { label: 'Next Cook' },
                  { label: 'Next Distillation' },
                  { label: 'Next PO' },
                  { label: 'Next TIB In' },
                  { label: 'Next TIB Out' },
                  { label: 'Next Order' },
                  { label: 'Next Invoice' },
                ].map((item) => (
                  <div key={item.label}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {item.label}
                    </label>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                      />
                      <div className="ml-2 flex flex-col">
                        <button
                          type="button"
                          className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-t text-gray-300 hover:bg-primary-light text-xs"
                        >
                          ▲
                        </button>
                        <button
                          type="button"
                          className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-b border-t-0 text-gray-300 hover:bg-primary-light text-xs"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="mt-6 flex space-x-3">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-smooth font-medium"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-smooth font-medium"
            >
              Clear
            </button>
          </div>
        </form>
      )}

      {/* Financial Settings Tab */}
      {activeTab === 'Financial Settings' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: FINANCIAL SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">FINANCIAL SETTINGS</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Financial Package
                  </label>
                  <select className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold">
                    <option value="">Select Financial Package</option>
                    <option value="QuickBooksDesktop">QuickBooksDesktop</option>
                    <option value="QuickBooksOnline">QuickBooksOnline</option>
                    <option value="None">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Default Labor Rate
                  </label>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-300">$</span>
                    <input
                      type="number"
                      step="0.01"
                      className="flex-1 px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <div className="ml-2 flex flex-col">
                      <button
                        type="button"
                        className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-t text-gray-300 hover:bg-primary-light text-xs"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-b border-t-0 text-gray-300 hover:bg-primary-light text-xs"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sales Tax Item Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Include Invoice Sales Tax
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="include-sales-tax" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="include-sales-tax" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    HST Tax Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Allow ACH Payment
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="allow-ach" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="allow-ach" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Allow CC Payment
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="allow-cc" value="YES" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">YES</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="allow-cc" value="NO" className="mr-2 text-accent-gold" />
                      <span className="text-gray-300">NO</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: EXTERNAL ACCOUNT NAMES */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">EXTERNAL ACCOUNT NAMES</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'WS Raw Materials' },
                  { label: 'WS Work In Process (WIP)' },
                  { label: 'WS Finished Goods' },
                  { label: 'WS COGS' },
                  { label: 'WS Accounts Payable' },
                  { label: 'WS Accounts Receivable' },
                  { label: 'WS COCS Tax' },
                  { label: 'WS COCS Labor' },
                  { label: 'WS Sales' },
                ].map((item) => (
                  <div key={item.label}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {item.label}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="mt-6 flex space-x-3">
            <button
              type="submit"
              className="px-6 py-2 bg-accent-gold text-primary-dark rounded hover:bg-accent-gold-light transition-smooth font-medium"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-smooth font-medium"
            >
              Clear
            </button>
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
        </form>
      )}

      {/* Units Tab */}
      {activeTab === 'Units' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <div className="space-y-8">
            {/* SYSTEM OF MEASUREMENT */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">SYSTEM OF MEASUREMENT</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Distillery Unit Setting
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="distillery-unit" value="US_STANDARD" className="mr-2 text-accent-gold" />
                    <span className="text-gray-300">US STANDARD</span>
                  </label>
                </div>
              </div>
            </div>

            {/* INDIVIDUAL UNIT SETTINGS */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">INDIVIDUAL UNIT SETTINGS</h2>
              
              <div className="space-y-6">
                {[
                  { label: 'Amount of Alcohol (PG, LAA)' },
                  { label: 'Alcohol Concentration (Proof, ABV)' },
                  { label: 'Weight or Mass (lb, kg)' },
                  { label: 'Sugar Content (Brix, SG)' },
                  { label: 'Temperature (°F, °C)' },
                  { label: 'Volume (gal, l)' },
                  { label: 'Density (lb/gal, g/l)' },
                  { label: 'Length (in, cm)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {item.label}
                      </label>
                      <div className="flex items-center space-x-6">
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input type="radio" name={`unit-${item.label}`} value="US_STANDARD" className="mr-2 text-accent-gold" />
                            <span className="text-gray-300">US STANDARD</span>
                          </label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-400">Hide Unit Switch?</span>
                          <label className="flex items-center">
                            <input type="radio" name={`hide-${item.label}`} value="YES" className="mr-2 text-accent-gold" />
                            <span className="text-gray-300">YES</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name={`hide-${item.label}`} value="NO" className="mr-2 text-accent-gold" />
                            <span className="text-gray-300">NO</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Default Temperature */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Default Temperature
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.1"
                      className="px-3 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-900 focus:outline-none focus:border-accent-gold"
                    />
                    <div className="ml-2 flex flex-col">
                      <button
                        type="button"
                        className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-t text-gray-300 hover:bg-primary-light text-xs"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        className="px-2 py-1 bg-primary-DEFAULT border border-accent-blue rounded-b border-t-0 text-gray-300 hover:bg-primary-light text-xs"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit and Clear Buttons */}
          <div className="mt-6 flex space-x-3">
            <button
              type="submit"
              className="px-6 py-2 bg-accent-gold text-primary-dark rounded hover:bg-accent-gold-light transition-smooth font-medium"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-smooth font-medium"
            >
              Clear
            </button>
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
        </form>
      )}

      {/* Logo Tab */}
      {activeTab === 'Logo' && (
        <form className="bg-primary-light rounded-lg border border-accent-blue p-6">
          <p className="text-gray-300 mb-6">
            You may select a logo to use on invoices, packing slips, and your tour signup page. Supported formats are PNG, JPG, and GIF.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Logo Image */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">Logo Image</h2>
              
              <div className="space-y-4">
                {/* Current Logo Display */}
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary-DEFAULT border-2 border-accent-blue flex items-center justify-center">
                    <span className="text-gray-500 text-sm">No logo uploaded</span>
                  </div>
                </div>

                {/* Delete Logo Button */}
                <button
                  type="button"
                  className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-smooth font-medium"
                >
                  Delete Logo
                </button>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload New Logo
                  </label>
                  <div className="border-2 border-dashed border-accent-blue rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/gif"
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="cursor-pointer inline-block px-4 py-2 bg-primary-DEFAULT border border-accent-blue rounded text-gray-300 hover:bg-primary-light transition-smooth"
                    >
                      Select files...
                    </label>
                    <p className="mt-4 text-gray-400 text-sm">Drop files here to upload</p>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-accent-gold text-primary-dark rounded hover:bg-accent-gold-light transition-smooth font-medium"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Right Column: Display Options */}
            <div>
              <h2 className="text-xl font-semibold text-accent-gold mb-4">Display Options</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Show On Invoices', default: 'YES' },
                  { label: 'Show On Packing Lists', default: 'YES' },
                  { label: 'Show On Tour Page', default: 'YES' },
                  { label: 'Show On Purchase Orders', default: 'YES' },
                  { label: 'Show On Xfer Out PDF', default: 'NO' },
                ].map((item) => (
                  <div key={item.label}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {item.label}
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`display-${item.label}`}
                          value="YES"
                          className="mr-2 text-accent-gold"
                        />
                        <span className="text-gray-300">YES</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`display-${item.label}`}
                          value="NO"
                          className="mr-2 text-accent-gold"
                        />
                        <span className="text-gray-300">NO</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
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
        </form>
      )}
    </div>
  )
}

export default DSPSettingsAndInfo
