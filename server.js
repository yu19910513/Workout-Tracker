const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(require("./routes/api_routes.js"));
app.use(require("./routes/home_routes.js"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);



app.listen(PORT,function(){
    console.log(`running Port ${PORT}`);
});
