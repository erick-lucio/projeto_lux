const Usuarios = require("../models/Users.js");
const Cidade = require("../models/Cidade.js");
const Estado = require("../models/Estado.js");
const Chat = require("../models/Chat.js");
const Pais = require("../models/Pais.js");

const bcrypt = require("bcrypt");
const Objects = require("../Objects.js");

module.exports = {
  async configDatabase(req, res) {
    const verify_country = await Pais.findAll({
      atributes: ["name"],
      where: {
        sigla: "BR",
      },
    });
    if (verify_country.length == 0) {
      const insert_country = await Pais.bulkCreate(Objects.paises);
    }
    const verify_state = await Estado.findAll({
      atributes: ["name"],
      where: {
        sigla: "AC",
      },
    });
    if (verify_state.length == 0) {
      const insert_states = await Estado.create({});
    }
    const verify_city = await Cidade.findAll({
      atributes: ["name"],
      where: {
        name: "Acre",
      },
    });
    if (verify_city.length == 0) {
      const insert_city = await Cidade.bulkCreate(Objects.cidades);
    }

    const verify_super_admin = await Usuarios.findAll({
      atributes: ["email"],
      where: {
        email: "email@email.com",
      },
    });
    if (verify_super_admin.length == 0) {
      const insert_users = await Usuarios.create({
        name: "adminErick",
        password: await bcrypt.hash("yuri20323", 10),
        email: "email@email.com",
        permission: "2",
      });
    }

    res.status(200).send("Sucess");
  },
  async testeFunction(req, res) {
    res.status(200).send([Objects.cidades, Objects.estados]);
  },
};
