import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send(`Hello world!`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
