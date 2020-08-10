const { Op, json } = require("sequelize");
const bcrypt = require("bcrypt");

const DefaultController = require("../controllers/DefaultController");

const Users = require("../models/Users");
const Images = require("../models/Imgs");
const Img_Main = require("../models/Img_main");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
const Chat = require("../models/Chat");
const Pais = require("../models/Pais");

const temp_security_key = "ajk85HJH48HJFJHJjht4uhj98uf9898H8YH876876yh876";

module.exports = {
  async getUser(req, res) {
    if (req.body.email == undefined || req.body.password == undefined) {
      res.status(400).send([{ succes: false }, { reason: "Bad Request" }]);
    } else {
      const { email, password } = req.body;
      await Users.findAll({
        attributes: ["id", "name", "password"],
        where: {
          email: email,
        },
      })
        .then(async (usersResponse) => {
          if (usersResponse.length == 0) {
            res.status(400).send([{ succes: false }]);
          } else {
            try {
              bcrypt
                .compare(password, usersResponse[0].password)
                .then(async (passCheck) => {
                  if (passCheck) {
                    res.status(200).send([
                      { name: usersResponse[0].name },
                      {
                        auth_id: await DefaultController.generateAndReturnKey(
                          usersResponse[0].id
                        ),
                      },
                      { succes: true },
                    ]);
                  } else {
                    res.status(400).send([{ succes: false }]);
                  }
                })
                .catch();
            } catch {
              res.status(400).send([{ succes: false }]);
            }
          }
        })
        .catch();
    }
  },
  async getUsersByQueryId(req, res) {
    const id = req.params.id;
    Users.findAll({
      where: { id: id },
    });
    res.status(200).send(json(user_data));
  },
  async createUser(req, res) {
    let {
      name,
      password,
      email,
      permissao,
      idade,
      estadoName,
      cidadeName,
      paisName,
    } = req.body;
    await Users.findAll({
      attributes: ["password", "email"],
      where: {
        email: email,
      },
    })
      .then(async (userResponse) => {
        if (userResponse.length == 0) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const pais = await Pais.findAll({
            attributes: ["id"],
            where: { name: paisName },
          });
          const estado = await Estado.findAll({
            attributes: ["id"],
            where: { name: estadoName },
          });
          const cidade = await Cidade.findAll({
            attributes: ["id"],
            where: { name: cidadeName },
          });

          await Users.create({
            name: name,
            password: hashedPassword,
            email: email,
            rua: "",
            sobre: "",
            permissao: permissao,
            idade: idade,
            estado_id: estado[0].id,
            cidade_id: cidade[0].id,
            pais_id: pais[0].id,
          })
            .then((response) => {
              return res.status(200).send([{ succes: true }]);
            })
            .catch((response) => {});
        } else {
          res.status(400).send([{ sucess: false }, { reason: "exist" }]);
        }
      })
      .catch((userResponse) => {});
  },
  async deleteUser(req, res) {
    const { id } = req.body;

    Users.destroy({ where: { id: id } });
    res.status(200).send([{ succes: true }]);
  },
};
