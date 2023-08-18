const express = require('express');
const db = require('./config/connection');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
}
);