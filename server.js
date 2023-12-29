// app.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/FINALTASK', { useNewUrlParser: true, useUnifiedTopology: true });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

const imageRoutes = require('./route');
app.use('/images', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
