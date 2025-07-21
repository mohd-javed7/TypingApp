const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const leaderboardRoutes = require('./routes/leaderboard');

require('dotenv').config();

const app = express();
app.use(cors({
  origin: "https://typer-ivory.vercel.app", 
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.error("MongoDB connection failed:", err));

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes); // Mounting auth routes
app.use('/api/leaderboard', leaderboardRoutes); // mounting leaderboard


app.get('/',(req,res)=>{
    res.send("API is running")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

