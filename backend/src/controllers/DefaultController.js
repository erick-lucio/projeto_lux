module.exports ={
    async defaultFunction(req, res) {          
        let html_test = '';
        html_test +="<html><body><h1>TESTE NODE</h1><h3>Podemos upar o backend e o fornt no heroku\
        claro mudando o link com um dominio comprado,e tenho que ver como q vou garantir p que o app sempre rode na mesma porta\
        </h3></body> </html>"
      
        res.send(html_test) ;
      },
}