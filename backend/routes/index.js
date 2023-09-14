const authRouter = require("./auth.js");
const nlpRouter = require("./NLP.js");
const complaintsRouter = require("./complaint.js");
const userRouter = require("./user.js");
const homepageRouter = require("./homepage.js");

module.exports = {
  authRouter,
  nlpRouter,
  complaintsRouter,
  userRouter,
  homepageRouter,
};
