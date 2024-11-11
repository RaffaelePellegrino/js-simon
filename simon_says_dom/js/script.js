function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeriEstratti = []
const btn = document.getElementById('start');
const answerForm = document.querySelector(".d-none");
const inputGroup = document.querySelector("input")
console.log(inputGroup)
console.log(answerForm)

function inserimento(){
    let numeriRandom = document.querySelectorAll("input");
    const numbersList = document.getElementById("numbers-list");
    btn.classList.add("d-none");

    numbersList.innerHTML = '';


    for(let i=0; i<numeriRandom.length;i++){
        let numero = randomNumber(1,10);
        if(numeriEstratti.includes(numero)){
            i--;
        }else{
            numeriEstratti.push(numero);
            const listItem = document.createElement("li");
            listItem.textContent = numero;
            numbersList.appendChild(listItem)
        }
    }
    setTimeout(() =>{
        numbersList.innerHTML = '';
        setTimeout(()=>{
            answerForm.classList.remove("d-none");
        }, 1)
    }, 10000)
    return numeriEstratti
}
btn.addEventListener("click", inserimento);

const btnRisposte = document.querySelector(".risposte")

function checker(){
    answerForm.classList.add("d-none");
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const n3 = parseInt(document.getElementById("n3").value);
    const n4 = parseInt(document.getElementById("n4").value);
    const n5 = parseInt(document.getElementById("n5").value);
    const numeriRisultati = [];
    const somma = 0
    const numeriGuessed = [n1,n2,n3,n4,n5];
    const message = document.getElementById("message")
    for( let i = 0; i< numeriGuessed;i++){
        for( let j = 0; j< numeriEstratti; j++){
            if (numeriGuessed[i] === numeriEstratti[j]){
                console.log("ciao")
                numeriRisultati.push(numeriGuessed[i]);
                somma+=1;
            }
        }
    }
    console.log(numeriEstratti)
    console.log(numeriGuessed)
    console.log(numeriRisultati)
    message.innerHTML = `I numeri indovinati sono ${numeriRisultati}`
}


btnRisposte.addEventListener("click",function(event){
    event.preventDefault();
    checker();
});
    