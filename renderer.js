const { ipcRenderer } = require('electron');

// This is where you will dynamically load the React component
// from G:\Projects\StartupManager\src\pages\openchat\index.tsx

async function loadReactComponent() {
  try {
    // Dynamically load the React component using a method appropriate for
    // your build setup (e.g., Webpack, Parcel, etc.). This is a placeholder.

    // Assuming your React component is bundled into a single file (e.g., bundle.js)
    // dynamically create a script tag and append it to the document.
    const script = document.createElement('script');
    script.src =
      'G:\\Projects\\StartupManager\\src\\pages\\openchat\\bundle.js'; // IMPORTANT: adjust to the actual bundle path
    document.body.appendChild(script);
  } catch (error) {
    console.error('Error loading React component:', error);
  }
}

loadReactComponent();
