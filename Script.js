function Gerar(tamanho){
    var Primeiro = "#"
    var Codigo = "0123456789"
    for(var i = 0; i < tamanho; i++){
        Primeiro += Codigo.charAt(Math.floor(Math.random() * Codigo.length))
    }
    return Primeiro
}
var SalvarBtn = document.getElementById("Salvar")
SalvarBtn.addEventListener("click",Salvar)
var array = [];
function Salvar(){
    if (localStorage.Nota){
    array = JSON.parse(localStorage.getItem('Nota'));
    }
    let NewArray = document.getElementById("Texto").value = Gerar(6);
    array.push(NewArray);
    localStorage.Nota = JSON.stringify(array)
    let Corpo = document.getElementById("Coisa")
    Corpo.innerHTML = ""
    for(var i in array){
        let p = document.createElement("h1");
        p.innerHTML = array[i];
        p.id = "ButtonCor"
        Corpo.append(p)
        p.style.background = array[i]
    }
}
if (localStorage.Nota){array = JSON.parse(localStorage.getItem('Nota'));}
    let Corpo = document.getElementById("Coisa")
    Corpo.innerHTML = ""
    for(var i in array){
        let p = document.createElement("h1");
        p.innerHTML = array[i];
        p.id = "ButtonCor"
        Corpo.append(p)
        p.style.background = array[i]
    }
