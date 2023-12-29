// routes/image.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadImage, updateImage } = require('./controller');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST: Upload a new image
router.post('/', upload.single('image'), uploadImage);

// PUT: Update an existing image by ID
router.put('/:id', upload.single('image'), updateImage);

module.exports = router;
