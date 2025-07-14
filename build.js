const fs = require('fs');

// Read template
let configContent = fs.readFileSync('config.template.js', 'utf8');

// Replace placeholders with environment variables
configContent = configContent.replace('{{GOOGLE_MAPS_API_KEY}}', process.env.GOOGLE_MAPS_API_KEY || '');
configContent = configContent.replace('{{API_ENDPOINT_URL}}', process.env.API_ENDPOINT_URL || '');

// Write to config.js
fs.writeFileSync('config.js', configContent);

console.log('Config file generated successfully!'); 