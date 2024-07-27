//Login Page =========================================

var ae = window.document.getElementById('areaemail')
ae.addEventListener('mouseenter', entrar)

function entrar() {
    
}



//Index Page =========================================

function carregar(){
    var horario = document.getElementById(`horario`)
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    horario.innerHTML = `Agora são ${hora}:${min}`
    
}
function checkTimeAndRefresh() {
            const now = new Date();
            const seconds = now.getSeconds();

            // Atualiza a página no início de cada minuto (quando os segundos são 0)
            if (seconds === 0) {
                window.location.reload();
            }
        }

        // Verifica a cada segundo
        setInterval(checkTimeAndRefresh, 1000);
