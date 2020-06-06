
const { Op } = require("sequelize");
const bcrypt = require("bcrypt")
const Usuarios = require('../models/Usuarios.js');
module.exports = {
  
  async returnUsers(req, res) {
    const user = await Usuarios.findAll({
            attributes: ['name','password'],
            where: {
                email: req.body.email
            },
          //  include: [{
         //       model: hp_state,
         //       attributes: ['state_id', 'state_name'],
          //      where: {
          //          state_status: 1,
         //           state_name: {
          //              $like: '%ta%'
          //          }
           //     }
            //}]
      });
      console.log(user)
      if (user === null) {
        return res.status(400).send('Cannot find user')
      }

      try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
          } else {
            res.send('Wrong Password')
          }
        } catch {
          res.status(500).send()
        }
        
  },
  async returnAllUsersteste2(req, res) {
    const user = Usuarios.find(user => user.name === req.body.name)

    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  
  },
  async createUser(req, res) {
    let { name, password ,email} = req.body;
    let users_check = await Usuarios.findAll({
      attributes:['name','password','email','permission'],
      where: {
        [Op.or]: [
          {name: name },
          {password: password },
          {email: email}
          
        ]
      }
    });
    const hashedPassword = await bcrypt.hash(password, 10)
    
    if(users_check.length != 0){
      return res.json('Error')
    }else{
      let user_create = await Usuarios.create({
        name:name,
        password:hashedPassword,
        email:email
       });
       return res.json('Sucess')
    }
    

     //return res.json(users_check);
    
  },
  async searchUser(req,res){
    let {valuePassword ,valueEmail} = req.params;
    let get_user = await Usuarios.findAll({
      attributes:['name_user','password_user','email','permissionLvl'],
      where: {
        [Op.or]: [
          {name: 'name' },
          {password: valuePassword },
          {email: valueEmail}
          
        ]
      }
    });
    if(get_user.length != 0){
       return res.json(get_user[0].name_user)
    }else{
      console.log('false')
    }
  }
};