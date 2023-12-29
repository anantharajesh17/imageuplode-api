// controllers/image.controller.js
const Image = require('./user');

async function uploadImage(req, res) {
  try {
    const { originalname, buffer } = req.file;
    const image = new Image({ filename: originalname, data: buffer });
    await image.save();
    res.json({ message: 'File uploaded successfully', image }); // Include the 'image' object in the response
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
}

async function updateImage(req, res) {
  try {
    const { id } = req.params;
    const { originalname, buffer } = req.file;
    const updatedImage = { filename: originalname, data: buffer };
    await Image.findByIdAndUpdate(id, updatedImage);
    const image = await Image.findById(id); // Fetch the updated image
    res.json({ message: 'File updated successfully', image }); // Include the 'image' object in the response
  } catch (error) {
    res.status(500).json({ error: 'Error updating file' });
  }
}

module.exports = { uploadImage, updateImage };
