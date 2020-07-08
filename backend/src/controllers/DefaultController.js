const Users = require("../models/Users");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
const Chat = require("../models/Chat");
const Pais = require("../models/Pais");

const bcrypt = require("bcrypt");
const Objects = require("../Objects.js");

module.exports = {
  async configDatabase(req, res) {
    let verify_country = await Pais.findAll({
      atributes: ["name"],
      where: {
        sigla: "BR",
      },
    });
    if (verify_country.length == 0) {
      let insert_country = await Pais.create({
        name: Objects.paises[0].name,
        sigla: Objects.paises[0].sigla,
      });
    }
    let verify_state = await Estado.findAll({
      atributes: ["name"],
      where: {
        sigla: "AC",
      },
    });
    if (verify_state.length == 0) {
      Objects.estados.forEach((element) => {
        let verify_country = Pais.findAll({
          atributes: ["id"],
          where: {
            sigla: "BR",
          },
        });
        console.log(verify_country);
        let insert_states = Estado.create({
          name: element.name,
          sigla: element.sigla,
          pais_id: verify_country[0].id,
        });
      });
    }
    //
    let verify_city = await Cidade.findAll({
      atributes: ["name"],
      where: {
        name: "Acre",
      },
    });
    if (verify_city.length == 0) {
      Objects.cidade.forEach((element) => {
        let verify_state = Estado.findAll({
          atributes: ["id", "pais_id"],
          where: {
            sigla: element.sigla,
          },
        });
        let insert_city = Cidade.create({
          name: element.name,
          estado_id: verify_state[0].id,
          pais_id: verify_state[0].pais_id,
        });
      });
    }

    let verify_super_admin = await Usuarios.findAll({
      atributes: ["email"],
      where: {
        email: "email@email.com",
      },
    });
    if (verify_super_admin.length == 0) {
      let insert_users = await Usuarios.create({
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
