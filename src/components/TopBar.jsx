function TopBar() {
  return (
    <header className="h-16 bg-primary border-b border-accent-blue flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-accent-gold">Distillery Tracker</h1>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-accent-blue flex items-center justify-center">
          <svg className="h-8 w-8 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default TopBar

