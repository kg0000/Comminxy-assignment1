import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import entriesRouter from "./routes/entries.js";

const app = express();

// Render will give PORT in production
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/entries", entriesRouter);

// Health check
app.get("/", (req, res) => {
  res.send("Emotion Journal API is live 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
