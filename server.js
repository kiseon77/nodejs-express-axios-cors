const express = require("express");
const cors = require("cors");

let data = { message: "여러분 화이팅!" };

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.text());

app.options("/", (req, res) => {
  return res.send("요청보내세요.");
});
app.get("/", (req, res) => {
  return res.send(data.message);
});

app.put("/", (req, res) => {
  console.log(req.body);
  data.message = req.body.newMessage;
  return res.send(data.message);
});
app.delete("/", (req, res) => {
  data = {};
  return res.send(data.message);
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
