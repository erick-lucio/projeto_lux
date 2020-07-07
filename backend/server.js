const express = require("express");
const GETroutes = require("./src/routes/GET_Routes");
const POSTroutes = require("./src/routes/POST_Routes");
const UPDATEroutes = require("./src/routes/UPDATE_Routes");
const DELETEroutes = require("./src/routes/DELETE_Routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");

require("./src/database");

app.use(GETroutes);
app.use(POSTroutes);
app.use(UPDATEroutes);
app.use(DELETEroutes);
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

/*


app.use(bodyParser.json());
app.use(cors());
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

try {
    app.use(routes);
} catch (error) {
    console.log(error)
}

app.listen(3100);



npx prettier --write .
s
*/
