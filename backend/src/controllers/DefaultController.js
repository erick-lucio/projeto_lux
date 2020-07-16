const Users = require("../models/Users");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
const Chat = require("../models/Chat");
const Pais = require("../models/Pais");
const AuthSession = require("../models/AuthSession");
const cryptoRandomString = require("crypto-random-string");
const crypto = require("crypto");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const Objects = require("../Objects.js");

const frontKey = "senhafrontend";

function generateHashKey() {
  return cryptoRandomString({ length: 30 });
}
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
module.exports = {
  async configDatabase(req, res) {
    Pais.findAll({
      atributes: ["name"],
      where: {
        sigla: "BR",
      },
    })
      .then((paisResponse) => {
        if (paisResponse.length == 0) {
          Pais.bulkCreate(Objects.paises)
            .then((paisEstado) => {
              Estado.findAll({
                atributes: ["name"],
                where: {
                  sigla: "AC",
                },
              })
                .then((estadoResponse) => {
                  if (estadoResponse.length == 0) {
                    Estado.bulkCreate(Objects.estados)
                      .then((resp1) => {
                        Cidade.findAll({
                          atributes: ["name"],
                        })
                          .then((responseCidade) => {
                            if (responseCidade.length == 0) {
                              Cidade.bulkCreate(Objects.cidades)
                                .then((resp) => {
                                  Users.findAll({})
                                    .then((userResponse) => {
                                      if (userResponse.length == 0) {
                                        Pais.findAll({
                                          attributes: ["id"],
                                          where: {
                                            sigla: "BR",
                                          },
                                        })
                                          .then((paisResponse) => {
                                            Estado.findAll({
                                              attributes: ["id"],
                                              where: {
                                                sigla: "MG",
                                              },
                                            })
                                              .then((estadoResponse) => {
                                                Cidade.findAll({
                                                  attributes: ["id"],
                                                  where: {
                                                    name: {
                                                      [Op.like]:
                                                        "%Pedro leopoldo%",
                                                    },
                                                  },
                                                })
                                                  .then((cidadeResponse) => {
                                                    bcrypt
                                                      .hash("yuri20323", 10)
                                                      .then((hashPassword) => {
                                                        Users.create({
                                                          name: "adminErick",
                                                          password: hashPassword,
                                                          email:
                                                            "email@email.com",
                                                          permission: 2,
                                                          rua:
                                                            "Rua Lucio cardoso Teixeira",
                                                          sobre: "Admin",
                                                          idade: 21,
                                                          logged: false,
                                                          cidade_id:
                                                            cidadeResponse[0]
                                                              .id,
                                                          estado_id:
                                                            estadoResponse[0]
                                                              .id,
                                                          pais_id:
                                                            paisResponse[0].id,
                                                        });
                                                      })
                                                      .catch();
                                                  })
                                                  .catch();
                                              })
                                              .catch();
                                          })
                                          .catch();
                                      }
                                    })
                                    .catch((userResponse) => {});
                                })
                                .catch();
                            }
                          })
                          .catch((responseCidade) => {});
                      })
                      .catch();
                  }
                })
                .catch((estadoResponse) => {});
            })
            .catch((paisEstado) => {});
        }
      })
      .catch((paisResponse) => {});

    await res.status(200).send("Admin Created");

    //
  },
  async testeFunction(req, res) {
    res.status(200).send([{ sucess: true }]);
  },

  async verifyFrontKey(req, res, next) {
    if (req.headers.frontauth == frontKey) {
      next();
    } else {
      res.status(401).send([{ response: "unauthorized" }]);
    }
  },
  async generateAndReturnKey(userId, hashKey) {
    hashKey = await generateHashKey();

    await AuthSession.findAll({
      attributes: ["id"],
      where: {
        user_id: userId,
      },
    })
      .then(async (resp) => {
        if (resp.length == 0) {
          await AuthSession.create({
            user_id: userId,
            auth_key: hashKey,
          })
            .then(async (respCreate) => {})
            .catch();
        } else {
          await AuthSession.destroy({
            where: {
              user_id: userId,
            },
          })
            .then(async (resp) => {
              //console.log(generateHashKey())
              //console.log(hashKey)
              await AuthSession.create({
                user_id: userId,
                auth_key: hashKey,
              })
                .then(async (respCreate) => {})
                .catch();
            })
            .catch();
        }
      })
      .catch();

    return hashKey;
  },
  async verifyHashKey(req, res, next) {
    if (
      req.headers.frontauth != frontKey ||
      req.headers.authsession == undefined
    ) {
      res.status(401).send([{ response: "unauthorized" }]);
    } else {
      authKey = req.headers.authsession;
      AuthSession.findAll({
        atributes: ["id", "user_id", "updatedAt", "auth_key"],
        where: {
          auth_key: authKey,
        },
      })
        .then(async (responseSession) => {
          if (responseSession[0] != undefined || null) {
            var tokenTime = new Date(responseSession[0].updatedAt);
            var timeNow = new Date();

            tokenTime = addMinutes(tokenTime, 30);

            if (tokenTime.getTime() < timeNow.getTime()) {
              console.log("Token Expirado");
              await AuthSession.destroy({
                where: {
                  auth_key: authKey,
                },
              })
                .then((resp) => {
                  res.status(401).send([{ response: "unauthorized" }]);
                })
                .catch();
              ///////////////###################
            } else {
              console.log("Token ok");

              await AuthSession.update(
                [{ updatedAt: sequelize.fn("now") }], //sequelize.fn("now") },
                {
                  where: { auth_key: authKey },
                }
              )
                .then((responseAuthUpdate) => {
                  next();
                })
                .catch((responseAuthUpdate) => {
                  console.log(responseAuthUpdate);
                });
            }
          } else {
            res.status(401).send([{ response: "unauthorized" }]);
          }
        })
        .catch();
    }
  },
};
