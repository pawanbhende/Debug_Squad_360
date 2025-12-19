require("dotenv").config();
const express = require("express");
const cors = require("cors");
const supabase = require("./db");
const app = express();
const events = require("./routes/events");

app.use(cors());
app.use(express.json());

// Get all monasteries..
app.get("/monasteries", async (req, res) => {
const { data, error } = await supabase
  .from("monastery") // lowercase
  .select("*");
  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({ error: error.message });
  }
  console.log("Fetched monasteries:", data);
  res.json(data || []);
});
// Get monastery by ID..
app.get("/monasteries/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("Monastery")
      .select("*")
      .eq("monastery_id", req.params.id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});

// Proxy PDF route ..
app.get("/proxy-pdf", async (req, res) => {
  const url = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;

  if (!url || typeof url !== "string") {
    return res.status(400).send("Missing or invalid PDF URL");
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PDFProxy/1.0)",
        "Accept": "application/pdf",
      },
    });

    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch PDF");
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Content-Type", "application/pdf");
    res.send(buffer);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).send("Server error fetching PDF");
  }
});

app.use("/events", events);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
