module.exports ={
    async defaultFunction(req, res) {          
        let html_test = '';
<<<<<<< HEAD
        html_test +="<html><body><h1>TESTE NODE</h1><h3>Podemos upar o backend e o fornt no heroku\
        claro mudando o link com um dominio comprado,e tenho que ver como q vou garantir p que o app sempre rode na mesma porta\
        </h3></body> </html>"
=======
        html_test +="<html><body><h1>TESTE NODE</h1></body> </html>"
>>>>>>> 0083e12dbd87d6cf570a2d4a0621845a37ab6099
      
        res.send(html_test) ;
      },
}