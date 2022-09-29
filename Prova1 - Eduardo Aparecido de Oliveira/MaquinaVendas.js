let saldo = 0;
let aDepositar = 0;
let selecionar = 0;
let listaProdutos = [];

function iniciar(){
    
    const produto1 = {
        preco: 20,
        nome: "camisa",
        foto: "camisa.jpg",
        estoque: 15
    }
    addProduto(produto1);

    const produto2 = {
        preco: 30,
        nome: "calca",
        foto: "calca.jpg",
        estoque: 4
    }
    addProduto(produto2);

    const produto3 = {
        preco: 250,
        nome: "tenis",
        foto: "tenis.jpg",
        estoque: 8
    }
    addProduto(produto3);


    const produto4 = {
        preco: 350,
        nome: "relogio de pulso",
        foto: "relogio_pulso.jpg",
        estoque: 5
    }
    addProduto(produto4);

    const produto5 = {
        preco: 200,
        nome: "oculos",
        foto: "oculos.jpg",
        estoque: 7
    }

    addProduto(produto5);



    atualizarSaldo();
    atualizarADepositar();
    atualizarSelecionar();
    atualizarListaProdutos();
    atualizarItemSelecionado();
}

function atualizarSaldo(){
    document.getElementById("saldo").innerHTML = saldo;
}
function atualizarADepositar(){
    document.getElementById("depositar").innerHTML = aDepositar;
}
function atualizarSelecionar(){
    document.getElementById("selecionar").innerHTML = selecionar;
}
function atualizarItemSelecionado(){
    if(!listaProdutos[selecionar]){
        document.getElementById("item_selecionado").innerHTML = "nenhum item selecionado";
    }
    document.getElementById("item_selecionado").innerHTML = "<h2>"+listaProdutos[selecionar].nome+"<h2>";
}

function atualizarListaProdutos(){
    document.getElementById("produtos").innerHTML = "";
    for(let i = 0; i< listaProdutos.length; i++){
        document.getElementById("produtos").innerHTML += "<div class=\"produto\"><img class=\"foto\" src=\"Imagens/"+listaProdutos[i].foto+"\" alt=\"camisa\"><h4> Nome: "+listaProdutos[i].nome+" - Preço: "+listaProdutos[i].preco+" Reais <h4><h1 class=\"id_produto\"> Produto: "+i+"<h1> <h4>Restam: "+listaProdutos[i].estoque+" no estoque<h4><div>";
        document.getElementById("produtos").innerHTML += "";
    }
}

function depositar(){
    saldo += aDepositar;
    aDepositar = 0;
    atualizarSaldo();
    atualizarADepositar();
}

function addNumeroDepositar(preco){
    aDepositar = aDepositar*10 + preco;
    atualizarADepositar();
}
function apagarNumeroDepositar(){
    let stringDepositar = aDepositar.toString();
    stringDepositar = stringDepositar.slice(0, -1)
    aDepositar = stringDepositar;
    atualizarADepositar();
}
function retirarDinheiro(){
    saldo = 0;
    atualizarSaldo();
}

//Navegação
function setaCima(){
    selecionar++;
    atualizarSelecionar();
    atualizarItemSelecionado();
}
function setaBaixo(){
    if(selecionar > 0){
        selecionar--;
    }
    atualizarSelecionar();
    atualizarItemSelecionado();
}

function addProduto(produto){
    if(listaProdutos.length > 5){
        return;
    }
    listaProdutos.push(produto);
}

function comprar(){
    if(listaProdutos[selecionar].estoque == 0){
        alert("produto sem estoque");
        return;
    }
    if((saldo - listaProdutos[selecionar].preco) < 0){
        alert("saldo insuficiente, falta: " + -(saldo - listaProdutos[selecionar].preco) + " reais para comprar esse produto");
        return;
    }
    saldo = saldo - listaProdutos[selecionar].preco;
    listaProdutos[selecionar].estoque--;
    atualizarSaldo();
    atualizarListaProdutos();
}

/*
class produto{
    preco = 0;
    nome = "sem nome";
    foto = "nomeArquivo";
    estoque = 0;
}
*/