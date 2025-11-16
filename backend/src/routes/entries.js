import express from "express";
import { initDB } from "../data/db.js";

const router = express.Router();

// Add new emotion entry
router.post("/", async (req, res) => {
  try {
    const { emotion, note } = req.body;
    if (!emotion || !note)
      return res.status(400).json({ error: "Emotion and note are required." });

    const db = await initDB();
    await db.run("INSERT INTO entries (emotion, note) VALUES (?, ?)", [
      emotion,
      note,
    ]);

    res.json({ message: "Entry added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add entry." });
  }
});

// Get all entries
router.get("/", async (req, res) => {
  try {
    const db = await initDB();
    const entries = await db.all("SELECT * FROM entries ORDER BY created_at DESC");
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch entries." });
  }
});

export default router;
