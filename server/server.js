const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Matthew Kool 301184313 COMP229
dotenv.config();

//Instantiate my DB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Routes
const productRoutes = require('./routes/product');

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});