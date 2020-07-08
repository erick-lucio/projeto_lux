const { Op, json } = require("sequelize");
const bcrypt = require("bcrypt");

const Users = require("../models/Users");
const Images = require("../models/Imgs");
const Img_Main = require("../models/Img_main");

const temp_security_key = "ajk85HJH48HJFJHJjht4uhj98uf9898H8YH876876yh876";
module.exports = {
  async getUser(req, res) {
    const { email, password } = req.body;
    const user = await Users.findAll({
      attributes: ["name", "password"],
      where: {
        email: email,
      },
    });

    if (user.length == 0) {
      return res.status(400).send([{ succes: false }]);
    }

    try {
      if (await bcrypt.compare(password, user[0].password)) {
        //res.setHeader('Content-Type', 'application/json');
        res.send([
          { name: user[0].name },
          { auth_id: temp_security_key },
          { succes: true },
        ]);
      } else {
        res.send([{ succes: false }]);
      }
    } catch {
      res.status(500).send([{ succes: false }]);
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
