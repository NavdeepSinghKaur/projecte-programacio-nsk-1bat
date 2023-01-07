var arrayDeNotes = [];

let calculadorNotes = (nom, multiplicador) => {
    
    let notes = parseFloat(prompt(`indica les notes de ${nom}`));

    while (notes > 10 || notes < 0) { 
        notes = parseFloat(prompt(`Les notes de ${nom} no estan entre 0 i 10, torna a indicar-les`)) 
    };

    arrayDeNotes.push(notes*multiplicador);

    if (arrayDeNotes.length == 5){
        var sum = arrayDeNotes.reduce((i, value) => { return i + value; }, 0);

        var valor = document.querySelector("strong");
            valor.innerHTML = sum.toFixed(2);
        
        if (sum >= 9){ document.body.style.background = "#23a6d5"}
        else if (sum >= 7 && sum <= 9){ document.body.style.background = "#24dd43"}
        else if (sum >= 5 && sum <= 7){ document.body.style.background = "#eed752"}
        else {document.body.style.background = "#e22b2b"}

        console.log(arrayDeNotes)
        arrayDeNotes.length = 0
    };
    
};

const clickboto = () => {
    calculadorNotes("examen", 0.4);
    calculadorNotes("exercicis", 0.1);
    calculadorNotes("pràctiques", 0.2);
    calculadorNotes("projectes", 0.2);
    calculadorNotes("actitud", 0.1);
};
