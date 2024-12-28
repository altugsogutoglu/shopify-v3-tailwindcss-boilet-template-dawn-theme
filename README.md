# Shopify V3 TailwindCSS Boilerplate for Dawn Theme

Version: 1.0.0
Last Updated: 28/12/2024

This repository serves as a streamlined starting point for developing Shopify themes based on the **Dawn Theme**, enhanced with **TailwindCSS** and **Webpack** for a modern development experience.

## 🚀 Quick Setup

This boilerplate includes:
- Shopify's **Dawn Theme** as the base.
- **TailwindCSS** for rapid UI development.
- **Webpack** for bundling and asset management.

You can always refer to Shopify's official documentation for theme setup: [Shopify Theme Development Guide](https://shopify.dev/docs/storefronts/themes/getting-started/create)

## 📂 Folder Structure
```
├── src
│   ├── index.js       // JavaScript entry point
│   ├── tailwind.css   // Tailwind CSS entry point
├── assets
│   ├── main.js        // Bundled JavaScript (output)
│   ├── styles.css     // Bundled CSS (output)
├── layout
│   ├── theme.liquid   // Main layout file
├── webpack.config.js  // Webpack configuration
├── package.json       // Node dependencies and scripts
```

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/altugsogutoglu/shopify-v3-tailwindcss-boilet-template-dawn-theme.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## 📦 Available Commands

- **Development Mode:**
  ```bash
  npm run dev
  ```
  Starts Webpack in watch mode for live changes.

- **Build for Production:**
  ```bash
  npm run build
  ```
  Compiles and optimizes assets for production.

- **Start Development Server:**
  ```bash
  npm run start
  ```
  Launches Webpack Dev Server with live reloading.

## 🎨 Integration in theme.liquid
Ensure these lines are included in your `layout/theme.liquid` file:
```liquid
<!-- Adding CSS from /assets folder -->
{{ 'styles.css' | asset_url | stylesheet_tag }}

<!-- Adding JS from /assets folder -->
<script src="{{ 'main.js' | asset_url }}" defer></script>
```

## 🌟 Features
- **Modular Development:** Separate source files for JavaScript and CSS.
- **Automatic Asset Compilation:** Webpack bundles assets into `/assets`.
- **TailwindCSS Integration:** Utility-first CSS for rapid design.
- **Source Maps:** Debug assets efficiently.

## 📖 Documentation
- [Shopify Theme Development](https://shopify.dev/docs/storefronts/themes/getting-started)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
- [Webpack Documentation](https://webpack.js.org/concepts/)

## 🤝 Contributing
Feel free to fork this repository, submit issues, or make pull requests to improve the boilerplate.

## 📜 License
This project is licensed under the MIT License.

Happy coding! 🎉

❤️ Made with Love

This project is crafted with care and dedication by Medita. For more information, visit our website: medita.nl

Happy coding! 🎉