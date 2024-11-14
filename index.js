var btnLogin = document.getElementById("btnLogin");
var modal = document.getElementById("modal");
var closeModal = document.getElementById("close");


btnLogin.addEventListener("click", function () {
    modal.showModal();
  });

closeModal.addEventListener("click", function () {
    modal.close();
});

btncadastrar.addEventListener("click", function () {
    alert("seu cadastro foi realizado")
  });



function salvarDados(){
    var nome = document.getElementById("inome").value;
    var email = document.getElementById("iemail").value;
    var tel = document.getElementById("itel").value;
    var cpf = document.getElementById("icpf").value;
    var senha = document.getElementById("isenha").value;

    localStorage.setItem("inome",nome)
    localStorage.setItem("iemail",email)
    localStorage.setItem("itel",tel)
    localStorage.setItem("icpf",cpf)
    localStorage.setItem("isenha",senha)

}
