//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
}
//Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    (usuario == "admin" && senha == "123456") && logado ==0 ? window.location = "index.html" : alert("Acesso negado. Por favor revise os dados");
    logado++;

    
}
//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}