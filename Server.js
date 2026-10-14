

const express = require("express");
const path = require("path");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Fuula website
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Backend qorachuu
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    college: "Ifa Daandii Guddinaa College",
    message: "Backend hojjachaa jira."
  });
});

// Fuula hin argamne
app.use((req, res) => {
  res.status(404).send("Fuulli barbaadde hin argamne.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server port ${PORT} irratti jalqabe.`);
});

