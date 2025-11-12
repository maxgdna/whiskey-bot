# Distillery Tracker

A Progressive Web Application (PWA) for distilleries to track production for TTB reporting. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, professional dark theme with deep blue and gold accents
- 📱 Fully responsive design for desktop and mobile
- 🔄 Progressive Web App (PWA) - installable and works offline
- 🧭 Collapsible sidebar navigation with categories and subcategories
- 📊 Comprehensive tracking categories for distillery operations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
distillery-tracker/
├── src/
│   ├── components/       # Reusable components (Sidebar, TopBar, Page)
│   ├── pages/            # Page components organized by category
│   │   ├── RawMaterials/
│   │   ├── Production/
│   │   ├── Barrels/
│   │   ├── Processing/
│   │   ├── TransferInBond/
│   │   ├── FinishedProducts/
│   │   ├── Tanks/
│   │   ├── LogsAndReports/
│   │   ├── Administrator/
│   │   ├── Calculator/
│   │   └── Settings.jsx
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS imports
├── index.html
├── package.json
├── vite.config.js        # Vite configuration with PWA plugin
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Navigation Structure

The app includes the following main categories:

- **Raw Materials**: Receipts, Inventory, Transactions, Conversions, Logs
- **Production**: Fermentation, Distillation
- **Barrels**: Fill Barrels, Rackhouse Inventory, Dump Barrels, Manage Barrels
- **Processing**: Batching, Bottling, Mixed Cases, Dumped Cases, Recasing, Case and CSC Labels
- **Transfer In Bond**: Inbound, Outbound
- **Finished Products**: Finished Goods Inventory, Finished Goods Transfers, Sales Orders, Sales Interactions, Price Lists, Bailments and Depletions
- **Tanks**: Tank Status, Logs
- **Logs and Reports**: TTB Reports, Financial Reports, Whiskey System Reports, State Reports, Printable Worksheets, Physical Inventory, Whiskey System Logs, Daily Logs, Data Archive
- **Administrator**: Delete Transactions, QuickBooks Export, Payment Settings, Queued Jobs, Manage Users, Reset Account
- **Calculator**: Proof Gallons, LAA, Conversions
- **Settings (DSP Info)**: Single page for DSP information

## PWA Features

The app is configured as a Progressive Web App with:

- Web App Manifest for installability
- Service Worker for offline functionality
- Caching strategy for app shell and assets

To install the app:
1. Open the app in a supported browser (Chrome, Edge, Safari)
2. Look for the install prompt or use the browser's install option
3. The app will be available as a standalone application

### PWA Icons

The app is configured to use PWA icons (`pwa-192x192.png` and `pwa-512x512.png`). These should be placed in the `public` directory. If these icons are not present, the app will still work but won't have custom icons when installed. You can create these icons using any image editor or online PWA icon generator.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **vite-plugin-pwa** - PWA support

## Development

The app uses:
- **Inter font** from Google Fonts for clean, modern typography
- **Dark theme** with custom color palette inspired by whiskey barrels
- **Smooth transitions** for enhanced user experience
- **Responsive design** that works on all screen sizes

## License

This project is proprietary software for distillery operations.

