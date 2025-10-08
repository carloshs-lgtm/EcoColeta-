// Sistema de Login simples
function login() {

    window.location.href = 'app.html';
}

function acessoRapido() {

    window.location.href = 'app.html';
}


document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});

console.log('Login carregado - pronto para usar!');