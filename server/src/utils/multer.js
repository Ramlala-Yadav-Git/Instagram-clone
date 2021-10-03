const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
    folder: "instagram",
    allowedFormats: ["jpg", "png","jpeg","JPG"],
    cloudinary: cloudinary
});
module.exports = multer({ storage: storage });