require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  res.status(200).json({status: true})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
