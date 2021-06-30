import express from 'express';

const PORT = 5000;

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

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});

