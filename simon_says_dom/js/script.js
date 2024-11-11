function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeriGuessed = [];
const numeriRisultati = [];
const btn = document.getElementById('start');

function show(){
    const answerForm = document.getElementById("answer-form");
    answerForm.remove("d-none")
}

function inserimento(){
    let numeriRandom = document.querySelectorAll("input");
    const numbersList = document.getElementById("numbers-list");
    let inserimentoNumeri =[]

    numbersList.innerHTML = '';


    for(let i=0; i<numeriRandom.length;i++){
        let numero = randomNumber(1,10);
        if(inserimentoNumeri.includes(numero)){
            i--;
        }else{
            inserimentoNumeri.push(numero);
            const listItem = document.createElement("li");
            listItem.textContent = numero;
            numbersList.appendChild(listItem)
        }
    }
    console.log(inserimentoNumeri)
    setTimeout(() =>{
        numbersList.innerHTML = '';
        btn.classList.add("d-none");
    }, 10000)
}

btn.addEventListener("click", inserimento);

