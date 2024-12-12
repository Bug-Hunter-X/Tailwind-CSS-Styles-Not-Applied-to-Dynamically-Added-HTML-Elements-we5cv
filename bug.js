```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/**/*.html'], // Make sure this includes all your HTML files
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