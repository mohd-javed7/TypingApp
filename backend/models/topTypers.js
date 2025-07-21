const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    username: { type: String, required: true },
    wpm: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);