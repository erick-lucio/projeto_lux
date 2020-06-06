const Usuarios = require('../models/Usuarios.js');
const Cidade = require('../models/Cidade.js');
const Estado = require('../models/Estado.js');
const Chat = require('../models/Chat.js');
const estados = [
  {name:"AC"},{name:"AL"},{name:"AP"},{name:"AM"},{name:"BA"},{name:"CE"},{name:"DF"},{name:"ES"},{name:"GO"},{name:"MA"},{name:"MT"},
  {name:"MS"},{name:"MG"},{name:"PA"},{name:"PB"},{name:"PR"},{name:"PE"},{name:"PI"},{name:"RJ"},{name:"RN"},{name:"RS"},{name:"RO"},
  {name:"RR"},{name:"SC"},{name:"SP"},{name:"SE"},{name:"TO"},
]
module.exports ={
    async defaultFunction(req, res) {          
        let html_test = '';
        html_test +="<html><body><h1>TESTE NODE</h1><h3>Podemos upar o backend e o fornt no heroku\
        claro mudando o link com um dominio comprado,e tenho que ver como q vou garantir p que o app sempre rode na mesma porta\
        </h3></body> </html>"
      
        res.send(html_test) ;
      },
      async configDatabase(req, res) {          
          const insert_states = await Estado.bulkCreate(estados);
          const insert_users = await Usuarios.create({
            name:"admin",
            password:"erickzim",
            email:"email@email.com",
            permission:"2"
          })
        res.status(200).send("Sucess") ;
      },
}
/*
Acre 	AC 	Rio Branco
Alagoas 	AL 	Maceió
Amapá 	AP 	Macapá
Amazonas 	AM 	Manaus
Bahia 	BA 	Salvador
Ceará 	CE 	Fortaleza
Distrito Federal 	DF 	Brasília
Espírito Santo 	ES 	Vitória
Goiás 	GO 	Goiânia
Maranhão 	MA 	São Luís
Mato Grosso 	MT 	Cuiabá
Mato Grosso do Sul 	MS 	Campo Grande
Minas Gerais 	MG 	Belo Horizonte
Pará 	PA 	Belém
Paraíba 	PB 	João Pessoa
Paraná 	PR 	Curitiba
Pernambuco 	PE 	Recife
Piauí 	PI 	Teresina
Rio de Janeiro 	RJ 	Rio de Janeiro
Rio Grande do Norte 	RN 	Natal
Rio Grande do Sul 	RS 	Porto Alegre
Rondônia 	RO 	Porto Velho
Roraima 	RR 	Boa Vista
Santa Catarina 	SC 	Florianópolis
São Paulo 	SP 	São Paulo
Sergipe 	SE 	Aracaju
Tocantins 	TO 	Palmas


*/