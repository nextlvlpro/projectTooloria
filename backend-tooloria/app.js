require('dotenv').config();
const express = require('express');
const cors = require('cors');

const cocRouter = require('./src/modules/coc/index');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/coc', cocRouter);

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
