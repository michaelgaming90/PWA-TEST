const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require("cors");

const app = express();
const port = 443; // HTTPS default port

// SSL certificate and key
const options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt'))
};

// Serve static files from the "public" directory
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
});
