const terminaVocal = () => {
    let vocal = document.getElementById("vocal").value.trim()
    
    let validar =  new Promise((resolve, reject) => {
        if (vocal.length  === 0){
            reject ("No hay nada escrito")
        return;
        }
        let ultimoValor = vocal[vocal.length -1].toLowerCase();

        if (
            ultimoValor == "a" ||
            ultimoValor == "e" ||
            ultimoValor == "i" ||
            ultimoValor == "o" ||
            ultimoValor == "u" 
        ) {
            resolve ("El ultimo caracter ES una vocal");
        }
        else {
            reject ("El ultimo caracter NO es una vocal")
        }
    });
    validar.then(mensaje => alert(mensaje))
            .catch(error => alert(error))
}
