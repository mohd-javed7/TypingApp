const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/topTypers');

router.post('/', async (req, res) => {
    const { username, wpm } = req.body;
    console.log("Received POST data:", req.body);
    if (!username || !wpm) {
        return res.status(400).json({ error: "Username or WPM is mising" });
    }
    try {
        const newEntry = new Leaderboard({ username, wpm });
        await newEntry.save();
        res.status(201).json({ message: "Score saved!" });
    } catch (err) {
        console.error("Error saving score to DB:", err);
        res.status(500).json({ error: "Server error while saving score." });
    }
});

router.get('/', async (req, res) => {
    try {
        const entries = await Leaderboard.find().sort({ wpm: -1 }).limit(50);
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: "Error fetching leaderboard." });
    }
});

module.exports = router;
