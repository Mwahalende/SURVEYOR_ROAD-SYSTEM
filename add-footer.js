const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'admin.html',
    'contractor-assignment.html',
    'contractor-reg.html',
    'dash.html',
    'index.html',
    'manager.html',
    'officer.html',
    'officerview.html',
    'reports.html',
    'road-assignment.html',
    'serveryer.html',
    'serveryerlogin.html',
    'serveryerregister.html',
    'welcome.html'
];

const linksToAdd = `
    <link rel="stylesheet" href="footer-styles.css">
    <script src="footer.js" defer></script>
`;

htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, 'public', file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add the CSS and JS links before the closing head tag if they don't exist
    if (!content.includes('footer-styles.css')) {
        content = content.replace('</head>', linksToAdd + '</head>');
        fs.writeFileSync(filePath, content);
    }
});

console.log('Footer added to all pages successfully!');
