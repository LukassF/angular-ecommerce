const express = require("express");
const router = express.Router();
require("dotenv/config");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://yvducvsdtojidzouvfwb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZHVjdnNkdG9qaWR6b3V2ZndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjQyNTgsImV4cCI6MjAwOTk0MDI1OH0.57aIDX2cUukWEDnvexDABXVZpnt3ZIBDCpAJFbkYBko"
);

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("clothes").select();
  if (error) res.status(500).json(error);
  else res.json(data);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase.from("clothes").select().eq("id", id);
  if (error) res.status(500).json(error);
  else res.json(data);
});

module.exports = router;
