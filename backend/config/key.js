if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod"); //배포할시 production상태가되는데 그때 쓰는 파일이 prod
} else {
  module.exports = require("./dev");
}
