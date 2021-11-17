const express = require("express");
require("./service/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
