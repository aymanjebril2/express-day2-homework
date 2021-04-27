import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(" This is welcome to main page ");
});
app.get("/food", (req, res) => {
  res.send("this is page about food  ");
});
app.get("/favorite-food", (req, res) => {
  res.send("Japanese");
});
app.get("/favorite-movie", (req, res) => {
  res.send("Biutiful");
});
app.get("/about-me", (req, res) => {
  res.send("Coder who really likes rocks!");
});
app.get("/contact", (req, res) => {
  res.send("Email");
});

app.listen(PORT, () => {
  console.log(" my server Listening on post 5000");
});
