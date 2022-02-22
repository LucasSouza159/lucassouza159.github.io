function gotowhatsapp() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var vaga = document.getElementById("vaga").value;
    var tipoVaga = document.getElementById("tipoVaga").value;
    var area = document.getElementById("area").value;


    var url = "https://wa.me/+5511985307427?text="
        + "Nome: " + nome + "%0a"
        + "Email: " + email + "%0a"
        + "Modelo da vaga: " + vaga + "%0a"
        + "Tipo da vaga: " + tipoVaga + "%0a"
        + "Descrição da vaga: " + area;

    window.open(url, '_blank').focus();
}