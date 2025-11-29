import express from "express";
import Course from "./course.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.json({ error: "Course not found" });

    res.json(course);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body);

    if (!updated) return res.json({ error: "Course not found" });

    res.json(updated);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ error: "Course not found" });

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

export default router;
