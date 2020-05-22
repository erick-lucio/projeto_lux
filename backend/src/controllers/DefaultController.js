module.exports ={
    async defaultFunction(req, res) {          
        let html_test = '';
        html_test +="<html><body><h1>TESTE NODE</h1></body> </html>"
      
        res.send(html_test) ;
      },
}