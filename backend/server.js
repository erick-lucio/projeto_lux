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

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
app.use(GETroutes);
app.use(POSTroutes);
app.use(UPDATEroutes);
app.use(DELETEroutes);
//DefaultController.authUserKey(usersResponse[0].id)
//DefaultController.authUserKey(usersResponse[0].id,key)
//se chamado so com um params ele gera e retorna uma key, se chamado c 2 ele verifica a key se ta expirada ou n
//DefaultController.authUserKey(null,key)
//VER PQ SO ESTA ADICIONANDO 800 CIDADE E ARRUMA A INSERÇÃO DE USUARIO NO CONTROLLER DEFAULT
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
