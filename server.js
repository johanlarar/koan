// Async Koan Companion Server
// To use this, run: node async-koan-server.js
// Ensure this server is running before your Koan attempts a fetch call

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 1337;

app.use(cors());

app.get('/divine', (req, res) => {
  res.json({ message: "The call is heard." });
});

app.listen(PORT, () => {
  console.log(`🔮 Async Koan server listening at http://localhost:${PORT}`);
});
