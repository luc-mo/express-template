import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const PORT = process.env.SERVER_PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server up and running: http://localhost:${PORT}`);
});

app.get('*', (req, res) => {
  res.send('Hello World');
});

export default app;