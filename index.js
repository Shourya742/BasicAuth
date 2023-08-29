const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
