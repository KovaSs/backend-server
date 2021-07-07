import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

// Reading custom env variables
dotenv.config({ path: path.resolve(process.cwd(), process.env.ENV_PATH || '.env' ) })
const env = process.env;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    server: 'working',
    status: 200,
    query: req.query
  })
});

app.post('/', (req, res) => {
  res.status(200).json({
    server: 'working',
    status: 200,
    body: req.body
  })
});

async function startApp() {
  try {
    await mongoose.connect(env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    app.listen(env.PORT, () => {
      console.log(`🚀 SERVER STARTED ON PORT ${env.PORT}`);
    });
  } catch (error) {
    console.log('❌ SERVER ERROR:', error);
  }
}

startApp();
