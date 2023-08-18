const express = require('express');
const db = require('./config/connection');
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());

app.use("/api/auth", authRoute);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
}
);