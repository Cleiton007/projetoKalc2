//Teclas
const keys = document.querySelectorAll(".buttons .numbers button:not(#clear)");
const clear = document.querySelector("#clear");

//Operações
const ops = document.querySelectorAll(".buttons .operators button");

//Visor
const screen = document.querySelector(".screen");

//Eventos teclas
keys.forEach(function(key){
    key.addEventListener("click", function(){
        if(screen.innerText == "0" || screen.innerText == "Infinity"){
            screen.innerText = "";
        }
            const keyValue = key.getAttribute("data-val");
            insertValue(keyValue);
    });     
});

//Eventos operações
ops.forEach(function(op){
    op.addEventListener("click", function(){
        if(screen.innerText == "Infinity"){
            screen.innerText = "0";
            return;
        }
        if(op.innerText == "="){
            showResult(screen.innerText);
        }else{
            const opValue = op.getAttribute("data-val");
            insertValue(opValue);
        }
    });
});

clear.addEventListener("click", function(){
    screen.innerText = "0";
});

//Inserir operação
const insertValue = function(value){

    if(screen.innerText.length > 13) return;

    screen.innerText = screen.innerText + value;
}

//Executar operação
const showResult = function(operation){
    screen.innerText = eval(operation);
};