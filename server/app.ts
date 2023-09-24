import 'dotenv/config'; // Import the dotenv config
import express from 'express'; // Import the express in typescript file

const app = express(); // Initialize the express engine

// Handling '/' Request
app.get('/', (req, res) => {
    res.send('TypeScript With Express');
});


const PORT = process.env.PORT || 3000;

// Listen to the port
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App: http://localhost:${PORT}/`);
});
