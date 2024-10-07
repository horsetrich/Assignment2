const express = require('express');
const mongoose = require('mongoose');

//Instantiate my DB
mongoose.connect('mongodb://127.0.0.1:27017/Marketplace', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Routes
const productRoutes = require('./routes/product');

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});