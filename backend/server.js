const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());

const io = socketio(server);

// Variable to store the latest location data
let latestLocationData = null;

// Socket connection to event
io.on("connection", (socket) => {
    socket.on("send-location", function (data) {
        latestLocationData = { id: socket.id, ...data }; // Update with the latest location
        io.emit("recieve-location", latestLocationData);
        console.log("Leaflet map working");
    });

    socket.on("disconnected", () => {
        io.emit("disconnect", socket.id);
        console.log("Client disconnected");
    });

    console.log("New connection");
});

// MongoDB Connection
main().catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb+srv://ansh1044:ansh0621@learning.n1pvy.mongodb.net');
    console.log("DB connected");
}

// Schema and Model for Accommodations
const accommodationSchema = new mongoose.Schema({
    name: String,
    accommodation: String,
    contactName: String,
    contactNumber: Number,
    contactMail: String,
    roomRent: String,
    image: String, // Will store the filename
    district: String,
    place: String,
    latitude: Number,   // Add latitude field
    longitude: Number    // Add longitude field
});

const Accommodation = mongoose.model('Stays', accommodationSchema);

// Multer Setup for File Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../frontend/public/');
        
        // Ensure the directory exists
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath); // Set the destination
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name
    }
});

const upload = multer({ storage });

// POST Route to Store Accommodation
app.post('/storeStay', upload.single('accommodationPhoto'), async (req, res) => {
    try {
        let stay = new Accommodation({
            name: req.body.accommodationName,
            accommodation: req.body.accommodationType,
            district: req.body.district,
            place: req.body.place,
            contactName: req.body.ownerName,
            contactMail: req.body.ownerEmail,
            contactNumber: req.body.ownerContact,
            roomRent: req.body.roomRent,
            image: req.file ? req.file.filename : null // Store filename if the image is uploaded
            // Include latitude and longitude if available
        });

        const doc = await stay.save();
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET Route for Search
app.get('/', async (req, res) => {
    try {
        const { accommodation, place, district } = req.query;

        // Build query object
        const query = {};
        if (accommodation) query.accommodation = accommodation;
        if (place) query.place = { $regex: place, $options: "i" };
        if (district) query.district = { $regex: district, $options: "i" };

        const docs = await Accommodation.find(query);
        res.json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/destinationSearch', async (req, res) => {
    try {
        const { district, place } = req.body;

        // Build query object
        const query = {};
        if (place) query.place = { $regex: place, $options: "i" };
        if (district) query.district = district;

        const docs = await Accommodation.find(query);
        res.json(docs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET Route for Leaflet Map
app.get('/leafletMap', (req, res) => {
    if (latestLocationData) {
        res.json({
            latitude: latestLocationData.latitude,
            longitude: latestLocationData.longitude,
        });
    } else {
        res.status(404).json({ message: 'No location data available' });
    }
});

// Start Server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
