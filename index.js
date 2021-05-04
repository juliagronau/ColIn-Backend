import express from "express";
import cors from "cors";
import "dotenv/config.js";
import "./database/mongoose.js";
import themes from "./routes/themes.js";
import users from "./routes/users.js";

const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: process.env.APP_URI,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/themes", themes);
app.use("/user", users);

app.get("/", (req, res) => {
  res.send("<h1>Theme API for ColIn</h1><h2>Endpoint: /themes/:id</h2>");
});

app.listen(port, () => console.log(`Server running in port ${port}`));

// make a donation to https://www.htmlcsscolor.com/
