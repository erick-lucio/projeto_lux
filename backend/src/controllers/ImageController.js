const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");
const Users = require("../models/Users");
const Images = require("../models/Imgs");
const Img_Main = require("../models/Img_main");
const AuthSession = require("../models/AuthSession");

const { Op } = require("sequelize");
const fs = require("fs");
const Imgs = require("../models/Imgs");

module.exports = {
  async createProductCategory(req, res) {},
  async getProductCategory(req, res) {},
  async createProduct(req, res) {
    const { name, description, prod_category_id } = req.body;
    console.log(name, description, prod_category_id);
    const insert_users = await Product.create({
      name: name,
      description: description,
      product_category_id: prod_category_id,
      include: [
        {
          model: Product_Category,
          attributes: ["id"],
        },
      ],
    });
    res.status(200).send("OK");
  },
  async getProductImgsAll(req, res) {
    const verify_product = await Images.findAll({
      attributes: [["id", "path_url"]],
      where: {},

      include: [
        {
          model: Product,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).send(verify_product);
  },
  async getUserImgs(req, res) {
    user_id = await AuthSession.findAll({
      attributes: ["user_id"],
      where: { auth_key: req.headers.authsession },
    });

    const verify_imgs = await Images.findAll({
      attributes: ["id", "name", "description"],
      where: {
        user_id: user_id[0].user_id,
      },
    });
    res.status(200).send(verify_imgs);
  },
  async uploadImage(req, res) {
    //id, name, description, hidden, path, user_id, createdAt, updatedAt
    let { description, hidden, user_id } = req.body;
    description = "Img description";
    hidden = false;
    user_id = await AuthSession.findAll({
      attributes: ["user_id"],
      where: { auth_key: req.headers.authsession },
    });

    await Images.create({
      path: path.resolve(__dirname, "..", "imgRepository", req.filename),
      description: description,
      name: "Imagem",
      hidden: hidden,
      user_id: user_id[0].user_id,
    });
    res.status(200).send([{ sucess: true }]);
  },
  async getImgById(req, res) {
    const id = req.params.id;
    const verify_product = await Images.findAll({
      atributes: ["path"],
      where: {
        id: id,
      },
    });
    if (verify_product.length == 0) {
      res.status(200).send([{ sucess: false }, { reason: "Img Not Found" }]);
    } else {
      res.status(200).sendFile(verify_product[0].path);
    }
  },
  async deleteImages(req, res) {
    const { id } = req.body;
    const img_file = await Images.findAll({
      attributes: ["path"],
      where: { id: id },
    });
    const path = img_file[0].path;
    try {
      fs.unlinkSync(path);
      //file removed
    } catch (err) {
      console.error(err);
    }
    Images.destroy({ where: { id: id } });
    res.status(200).send([{ succes: true }]);
  },
  async setMainImg(req, res) {
    const { img_id } = req.body;
    user_id = await AuthSession.findAll({
      attributes: ["user_id"],
      where: { auth_key: req.headers.authsession },
    });
    search_img = await Images.findAll({
      where: {
        id: img_id,
      },
    });
    imgs = await Img_Main.findAll({
      attributes: ["user_id", "img_id"],
      where: { user_id: user_id[0].user_id },
    });
    if (search_img.length == 0) {
      res.status(400).send([{ succes: false }, { reason: "Img not Fouund" }]);
    } else {
      if (imgs.length > 1) {
        await Img_Main.destroy({ where: { user_id: user_id[0].user_id } });
      }
      if (imgs.length == 0) {
        await Img_Main.create({ user_id: user_id[0].user_id, img_id: img_id });
      } else {
        await Img_Main.update(
          { img_id: img_id },
          {
            where: {
              user_id: user_id[0].user_id,
            },
          }
        );
      }
      res.status(200).send([{ succes: true }]);
    }
  },
  async getMainImg(req, res) {
    user_id = await AuthSession.findAll({
      attributes: ["user_id"],
      where: { auth_key: req.headers.authsession },
    });

    imgMainId = await Img_Main.findAll({
      where: { user_id: user_id[0].user_id },
    });

    if (imgMainId.length == 0) {
      res
        .status(401)
        .send([
          { succes: false },
          { reason: "This User Dont have a main Img" },
        ]);
    } else {
      res.status(200).send([{ succes: true }, { img_id: imgMainId[0].img_id }]);
    }
  },
};
