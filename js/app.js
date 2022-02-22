function gotowhatsapp() {

    var nameForm = document.getElementById("nameForm").value;
    var emailForm = document.getElementById("emailForm").value;
    var vagaForm = document.getElementById("vagaForm").value;
    var tipoVagaForm = document.getElementById("tipoVagaForm").value;
    var areaForm = document.getElementById("areaForm").value;


    var url = "https://wa.me/+5511985307427?text="
        + "Name: " + nameForm + "%0a"
        + "Email: " + emailForm + "%0a"
        + "Job model: " + vagaForm + "%0a"
        + "Type of Job: " + tipoVagaForm + "%0a"
        + "job description: " + areaForm;

    window.open(url, '_blank').focus();
}