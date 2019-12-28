var expresss = require('express');

var app = expresss();
var PORT = proccess.env.PORT;

app.use(expresss.urlencoded({ extended: true }));
app.use(expresss.json());

// adding the routes 
require("./apps/Rounting/apiRoutes")(app);
require("./apps/Rounting/htmlRoutes")(app);

// server begins to listen 
app.listen(PORT, function () {
    console.log("app is listening on PORT" + PORT)
});