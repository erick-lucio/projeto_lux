const Users = require("../models/Users");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
const Chat = require("../models/Chat");
const Pais = require("../models/Pais");

const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const Objects = require("../Objects.js");

module.exports = {
  async configDatabase(req, res) {
    await Pais.findAll({
      atributes: ["name"],
      where: {
        sigla: "BR",
      },
    })
      .then((paisResponse) => {
        if (paisResponse.length == 0) {
          Pais.bulkCreate(Objects.paises)
            .then((paisEstado) => {})
            .catch((paisEstado) => {});
        }
      })
      .catch((paisResponse) => {});
    //////////////////////////////////////////////////////////////////////////////
    await Estado.findAll({
      atributes: ["name"],
      where: {
        sigla: "AC",
      },
    })
      .then((estadoResponse) => {
        if (estadoResponse.length == 0) {
          Estado.bulkCreate(Objects.estados);
        }
      })
      .catch((estadoResponse) => {});
    /////////////////////////////////////////////////////////////
    await Cidade.findAll({
      atributes: ["name"],
    })
      .then((responseCidade) => {
        if (responseCidade.length == 0) {
          Cidade.bulkCreate(Objects.cidades);
        }
      })
      .catch((responseCidade) => {});
    ///////////////////////////////////////////////

    await Users.findAll({})
      .then((userResponse) => {
        if (userResponse.length == 0) {
          let cidadeId, estadoId, paisId;
          Pais.findAll({
            attributes: ["id"],
            where: {
              sigla: "BR",
            },
          })
            .then((paisResponse) => {
              paisId = paisResponse[0].id;
            })
            .catch();
          Estado.findAll({
            attributes: ["id"],
            where: {
              sigla: "MG",
            },
          })
            .then((estadoResponse) => {
              estadoId = estadoResponse[0].id;
            })
            .catch();
          Cidade.findAll({
            attributes: ["id"],
            where: {
              [Sequelize.Op.iLike]: [{ name: "Pedro " }],
            },
          })
            .then((cidadeResponse) => {
              cidadeId = cidadeResponse[0].id;
            })
            .catch();
          console.log(cidadeId, estadoId, paisId);
          bcrypt
            .hash("yuri20323", 10)
            .then((hashPassword) => {
              Users.create({
                name: "adminErick",
                password: hashPassword,
                email: "email@email.com",
                permission: "2",
                rua: "Rua Lucio cardoso Teixeira",
                sobre: "Admin",
                idade: 21,
                logged: false,
                cidade_id: cidadeId,
                estado_id: estadoId,
                pais_id: paisId,
              });
            })
            .catch();
        }
      })
      .catch((userResponse) => {});

    await res.status(200).send("Sucess");

    //
  },
  async testeFunction(req, res) {
    Cidade.findAll({
      attributes: ["id"],
      where: {
        name: {
          [Op.Like]: ["Pedro leopoldo"],
        },
      },
    })
      .then((cidadeResponse) => {
        res.status(200).send(cidadeResponse[0]);
      })
      .catch();
  },
};
