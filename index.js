import express from "express";
import "dotenv/config.js";
import "./database/mongoose.js";
import themes from "./routes/themes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/themes", themes);

app.get("/", (req, res) => {
  res.send("<h1>Theme API for ColIn</h1><h2>Endpoint: /themes/:id</h2>");
});

app.listen(port, () => console.log(`Server running in port ${port}`));

// make a donation to https://www.htmlcsscolor.com/
