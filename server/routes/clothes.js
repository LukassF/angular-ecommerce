const express = require("express");
const router = express.Router();
require("dotenv/config");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.PROJECT_URL, process.env.API_KEY);

router.get("/", async (req, res) => {
  const filters = req.query.filters ? req.query.filters.split(",") : ["all"];
  const types = req.query.types ? req.query.types.split(",") : ["all"];
  const gender = req.query.gender
    ? req.query.gender.split(",")
    : ["male", "female"];

  const { data, error } = await supabase
    .from("clothes")
    .select()
    .in("gender", gender)
    .contains("categories", filters)
    .contains("type", types);

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
