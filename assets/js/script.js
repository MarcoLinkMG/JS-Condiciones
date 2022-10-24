function cambiarborde(){

    var imgBordeOri = document.getElementById('fotografia')
    
    if(imgBordeOri.style.border != "4px solid green"){

        imgBordeOri.style.border = "4px solid green"

    }else if(imgBordeOri.style.border != "none"){

        imgBordeOri.style.border = "none"

    }
}

function calcular(){

    bateria1 = document.querySelector("#cantidad-bat1")
    bateria2 = document.querySelector("#cantidad-bat2")
    bateria3 = document.querySelector("#cantidad-bat3")
    mensaje = document.querySelector("#mensaje")

    sumatoria = Number(bateria1.value) + Number(bateria2.value) + Number(bateria3.value)

    if(sumatoria <= 10){

        mensaje.innerHTML = "Llevas " + sumatoria + " Baterias"
    }else{

        mensaje.innerHTML = "Llevas demasiadas Baterias"
    }
}

function password(){

    digito1 = document.getElementById("digitouno").value
    digito2 = document.getElementById("digitodos").value
    digito3 = document.getElementById("digitotres").value
    mensaje = document.querySelector("#mensaje")

    pass = digito1+digito2+digito3

    if(pass == "911"){

        mensaje.innerHTML = "Password 1 Correcto"

    }else if(pass == "714"){

        mensaje.innerHTML = "Password 2 Correcto"

    }else{

        mensaje.innerHTML = "Password Incorrecto"

    }

}