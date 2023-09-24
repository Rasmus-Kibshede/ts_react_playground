import 'dotenv/config'; // Import the dotenv config
import express from 'express'; // Import the express in typescript file
import cors from 'cors'; // Import the cors

const app = express(); // Initialize the express engine
app.use(express.json()); // Use the express json parser
app.use(cors()); // Use the cors

// Handling '/' Request
app.get('/', (req, res) => {
    res.send('TypeScript With Express');
});

import loginRoute from './routes/loginRoue';
app.use(loginRoute);

const PORT = process.env.PORT || 3000;

// Listen to the port
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App: http://localhost:${PORT}/`);
});
