const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 이메일같은거 입력할때 스페이스바를 없애주는역할
    unique: 1, //단 하나만 존재할 수 있게
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number, //0은 일반유저 이런식으로
    default: 0, //지정하지 않으면 임의로 0을 부여
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema); //모델이름/스키마

module.exports = { User }; //다른곳에서도 쓸수 있게 export
