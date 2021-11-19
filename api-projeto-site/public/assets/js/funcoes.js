// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var times = sessionStorage.TIMES_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_times.innerHTML = times;

        if (times == 1) {
            b_times.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Atletico_mineiro_galo.png"
        }

        if (times == 2) {
            b_times.src = "https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png"
        }

        if (times == 3) {
            b_times.src = "https://w7.pngwing.com/pngs/177/904/png-transparent-sociedade-esportiva-palmeiras-campeonato-paulista-copa-do-brasil-choque-rei-paulista-derby-futebol-brasil-emblem-sport-logo.png"
        }

        if (times == 4) {
            b_times.src = "https://sortitoutsi.net/uploads/team/317.png"
        }

        if (times == 5) {
            b_times.src = "https://logodetimes.com/times/corinthians/logo-do-corinthians-1536.png"
        }

        if (times == 6) {
            b_times.src = "https://toppng.com/uploads/preview/escudos-hd-de-futebol-logo-fortaleza-esporte-clube-11563049453mpby12kfkl.png"
        }

        if (times == 7) {
            b_times.src = "https://logodetimes.com/times/internacional/logo-internacional-2048.png"
        }

        if (times == 8) {
            b_times.src = "https://logodownload.org/wp-content/uploads/2016/09/fluminense-logo-escudo-1.png"
        }

        if (times == 9) {
            b_times.src = "https://logodownload.org/wp-content/uploads/2016/10/america-mineiro-logo.png"
        }

        if (times == 10) {
            b_times.src = "https://logodetimes.com/times/ceara/logo-ceara-256.png"
        }
        if (times == 14) {
            b_times.src = "https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png"
        }

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

