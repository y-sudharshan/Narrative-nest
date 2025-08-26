import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blogs.js";
import userRoutes from "./routes/users.js";
import adminRoutes from "./routes/admin.js";

app.get("/", (req, res) => {
  res.send("Narrative Nest API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/narrative-nest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.error(err));
