const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require("./config/key"); //mongouri를 로컬상태에서 가져옴

//url인코딩 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
//json가져옴
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!!"));

app.post("/register", async (req, res) => {
  //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣기
  const user = new User(req.body); //bodyperser땜에 정보를 담을수있음

  const result = await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });

  /*user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });*/
});

app.listen(port, () => console.log(`Example app listening at on port ${port}`));
