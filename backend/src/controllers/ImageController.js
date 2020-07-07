const multer = require("multer");
const path = require("path");
const multerconfig = require("../config/multer");
const Users = require("../models/Users");
const Images = require("../models/imgs");
const Img_Main = require("../models/Img_main");

const { Op } = require("sequelize");

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
    if (!req.body.name) {
      req.body.name = "";
    }
    if (!req.body.email) {
      req.body.email = "";
    }
    if (!req.body.id) {
      req.body.id = "";
    }
    const { name, email, id } = req.body;
    const verify_product = await Images.findAll({
      attributes: [["id"]],
      where: {},
      include: [
        {
          model: Users,
          attributes: ["name"],
          where: {
            [Op.or]: [{ name: name }, { email: email }, { id: id }],
          },
        },
      ],
    });
    res.status(200).send(verify_product);
  },
  async uploadImages(req, res) {
    const { name, description } = req.body;
    const verify_product = await Product.findAll({
      atributes: ["id"],
      where: {
        name: name,
      },
    });
    if (verify_product.length != 0) {
      const insert_users = await Images.create({
        path: path.resolve(__dirname, "..", "imgRepository", req.filename),
        description: description,
        product_id: verify_product[0].id,
      });
      res.status(200).send("OK");
    } else {
      res.status(500).send("Product not found");
    }

    // console.log(path.resolve(__dirname,'..','imgRepository',req.filename))

    // res.status(200).sendFile(path.resolve(__dirname,'..','imgRepository',req.filename))
  },
  async getImgById(req, res) {
    const id = req.params.id;
    const verify_product = await Images.findAll({
      atributes: ["path"],
      where: {
        id: id,
      },
    });
    res.status(200).sendFile(verify_product[0].path);
  },
};
