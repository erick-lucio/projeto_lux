npm run start1
const estados = [
    {name:"AC"},{name:"AL"},{name:"AP"},{name:"AM"},{name:"BA"},{name:"CE"},{name:"DF"},{name:"ES"},{name:"GO"},{name:"MA"},{name:"MT"},
    {name:"MS"},{name:"MG"},{name:"PA"},{name:"PB"},{name:"PR"},{name:"PE"},{name:"PI"},{name:"RJ"},{name:"RN"},{name:"RS"},{name:"RO"},
    {name:"RR"},{name:"SC"},{name:"SP"},{name:"SE"},{name:"TO"},
  ]
estados.forEach(element => {
    var str_replace = "(sigla:"+element.name+"\s*)"
    var reg = new RegExp(str_replace, "gi");
    strin1 = strin1.replace(reg,"sigla:"+element.name+",name:'");
    //console.log(reg)    
});
console.log(strin1)