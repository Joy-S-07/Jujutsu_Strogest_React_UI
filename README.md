# Jujutsu Strongest React UI

A stunning, stylized web application UI built with React, Vite, and Tailwind CSS. This project serves as a modern landing page / UI showcase themed around the concepts of "The Strongest" from Jujutsu Kaisen (featuring components like Yuji Itadori).

## 🚀 Technologies Used

- **React 19** - For building a fast, interactive component-based UI.
- **Vite** - Next-generation frontend tooling for rapid development and lightning-fast HMR.
- **Tailwind CSS v4** - A utility-first CSS framework for rapid UI styling right in the markup.
- **Remix Icon** - Open-source neutral-style system symbols.

## 📂 Project Structure

This is a modular React project. The structure mainly focuses on the `src/` directory where all the magic happens:
- `src/components/Section1/`: Contains the foundational layout elements such as `Navbar`, content blocks (`Page1Content`), and character elements (`Yuji`, `Arrow`).
- `src/App.jsx`: The global application container setting up the background, theme, and main entry sections.

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with Vite:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## 🛠️ Scripts Available

- `npm run dev`: Starts the local development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run lint`: Runs ESLint to catch programming errors, bugs, or stylistic issues.
- `npm run preview`: Boot up a local static web server that serves the files from `dist` to preview your production build locally.
