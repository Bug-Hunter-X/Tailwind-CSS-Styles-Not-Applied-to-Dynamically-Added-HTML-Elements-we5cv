```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: [ // Ensure this includes all files and directories
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/**/*.html',
    './node_modules/@your-component-library/**/*.{html,js,jsx,ts,tsx}' // Add component library source if necessary 
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```