let myAudion = document.querySelector("#my_audio");
let myPhonetic = document.querySelector("#my_phonetic");
let btnElement = document.querySelector("#myBtn");

document.addEventListener("DOMContentLoaded", fetch_TheWord("welcome"));

function fit_inData(arr) {
    const firstPart = arr[0];
    document.querySelector("#wordTitle").innerHTML = "";
    document.querySelector("#phonetic").innerHTML = "";
    document.querySelector(".output").innerHTML = "";


    document.querySelector("#wordTitle").innerHTML =
    `word: <span id="ther">${firstPart.word}</span>`;
    document.querySelector("#phonetic").innerHTML =
    `Phonetic:<span id="phon">${firstPart.phonetic}</span>`;

    for(let j = 0; j < firstPart.phonetics.length; j++) {
        if(firstPart.phonetics[j].audio != ""){
            myAudion.src = firstPart.phonetics[j].audio;
        }
    };

    for (let i = 0; i < firstPart.meanings[0].definitions.length; i++) {
        const currentPart = firstPart.meanings[0].definitions[i];

        let myDiv = document.createElement("div");
        myDiv.classList.add("defin");

        if(currentPart.example){
            myDiv.innerHTML =
            `<h3 style="font-weight:bold;font-size:17px">Definition${i+1}:</h3>
            <p>${currentPart.definition}</p>
            <p><span>Exemple:</span>${currentPart.example}</p>`;
            document.querySelector(".output").appendChild(myDiv)
        }
        else{
            myDiv.innerHTML =
            `<h3 style="font-weight:bold;font-size:17px">Definition${i+1}:</h3>
            <p>${currentPart.definition}</p>`;
            document.querySelector(".output").appendChild(myDiv)
        }
    }
}


async function fetch_TheWord(wor){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wor}`;
    try {
        const data = await fetch(url)
        .then((response) =>response.json());
        fit_inData(data);
        
    } catch (error) {
        console.log(error); 
    }
}

btnElement.addEventListener("click", () => {
    document.querySelector("#wordTitle").innerHTML = "";
    document.querySelector("#phonetic").innerHTML = "";
    document.querySelector(".output").innerHTML = "";
    let searched_word = document.querySelector("#searched_word");
    if(searched_word.value.length > 2) {
        document.querySelector(".meaning").style.display = "none";
        document.querySelector(".loading").innerHTML = 
        ` <h1>Loading....</h1>
        <p style="margin-top: 20px;">Searching for the word <span>${searched_word.value}</span></p>`
        fetch_TheWord(searched_word.value);
        searched_word.value = "";
        document.querySelector(".loading").innerHTML = "";
        document.querySelector(".meaning").style.display = "block";
    }else{
        alert("NO")
    }
});