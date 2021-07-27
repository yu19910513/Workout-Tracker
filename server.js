const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useFindAndModify:false
})

require("./routes/api_routes")(app);
require("./routes/home_routes")(app);

app.listen(PORT,function(){
    console.log(`App listening on Port ${PORT}`);
});
