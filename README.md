# Pixel-Perfect React Dashboard Assignment

A high-fidelity, responsive implementation of the design assignment using React JS and Tailwind CSS.

## 🚀 Live Demo
- **Hosted App:** https://splendid-pothos-03a737.netlify.app/.

## 🛠️ Tech Stack & Key Choices
- **Build Engine:** Vite (Optimized production asset bundles)
- **Framework:** React JS (Modular component tree)
- **Styling:** Tailwind CSS (Utility-first, pixel-accurate layout)
- **Icons:** Lucide React
- **Fonts:** Google Fonts matching Figma typography

## ✅ Project Objective
Convert a high-fidelity Figma user interface design into a fully functional, highly responsive, and pixel-perfect web application using React.

## 📌 Key Assignment Goals
- Translate Figma layouts, spacing, typography, and colors into React UI.
- Use a component-based architecture with reusable, DRY React code.
- Implement responsive design for desktop, tablet, and mobile.
- Manage UI state for interactive elements like inputs, tabs, and search.
- Organize and package the project cleanly for GitHub submission.

## 📁 Project Structure
```
figma-assignment/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── avatar.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── LayoutWrapper.jsx
│   │   └── dashboard/
│   │       ├── AnalyticsCard.jsx
│   │       └── DataTable.jsx
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

## 📦 How to Run Locally
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd figma-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in the browser at the URL shown in the terminal.

## 🎯 Features Included
- Responsive dashboard layout with sidebar and top navigation.
- Reusable UI components for cards, inputs, buttons, and forms.
- Tailwind CSS design-token customization for colors and spacing.
- Clean, consistent component hierarchy for scalability.
- Pixel-perfect implementation aligned to Figma design guidelines.

## 🧩 Notes for Reviewers
- The project follows a modular component structure.
- Tailwind classes are used for exact spacing and typography.
- The app is ready for deployment and GitHub portfolio sharing.

## 💡 Optional Next Steps
- Add actual Figma asset exports to `src/assets/`.
- Improve accessibility with focus states and ARIA labels.
- Add form validation and interactive state handling.
- Deploy to Vercel, Netlify, or GitHub Pages.

