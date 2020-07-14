const { Op, json } = require("sequelize");
const bcrypt = require("bcrypt");

const DefaultController = require("../controllers/DefaultController");

const Users = require("../models/Users");
const Images = require("../models/Imgs");
const Img_Main = require("../models/Img_main");

const temp_security_key = "ajk85HJH48HJFJHJjht4uhj98uf9898H8YH876876yh876";

module.exports = {
  async getUser(req, res) {
    if (req.body.email == undefined || req.body.password == undefined) {
      res.status(400).send([{ response: "Bad Request" }]);
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
    const user_data = await Users.findAll({
      where: { id: id },
    });
    res.status(200).send(json(user_data));
  },
  async createUser(req, res) {
    let { name, password, email } = req.body;
    let users_check = await Usuarios.findAll({
      attributes: ["password", "email"],
      where: {
        email: email,
      },
    });
    if (users_check.length != 0) {
      return res.send([{ succes: false }]);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      let user_create = await Usuarios.create({
        name: name,
        password: hashedPassword,
        email: email,
      });
      return res.send([{ succes: true }]);
    }
  },
};
