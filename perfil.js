addEventListener("DOMContentLoaded",()=>{
    var recebernome = localStorage.getItem("inome")
    document.querySelector("#recebernome").innerHTML=recebernome

    var recebercpf = localStorage.getItem("icpf")
    document.querySelector("#recebercpf").innerHTML=recebercpf

    var receberemail = localStorage.getItem("iemail")
    document.querySelector("#receberemail").innerHTML=receberemail

    var recebertel = localStorage.getItem("itel")
    document.querySelector("#recebertel").innerHTML=recebertel

    var recebersenha = localStorage.getItem("isenha")
    document.querySelector("#recebersenha").innerHTML=recebersenha

})