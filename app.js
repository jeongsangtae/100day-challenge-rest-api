const express = require("express");

const app = express();

app.get("/quote", function (req, res, next) {
  res.json({
    quote:
      "웹 개발에 더 깊이 빠져들수록 웹 개발도 나에게 더 깊이 파고들 것이다.",
  });
});

app.listen(3000);
