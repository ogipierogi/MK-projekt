const dice2 = [
    ["rabbit", "/rabbit.png", ],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["bear", "img/bear.png"],
    ["bear", "img/bear.png"],
    ["elephants", "img/elephants.png"],
    ["giraffe","img/giraffe.png"],
    ["wolf","img/wolf.png"],
];

const dice1 = [
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["bear", "img/bear.png"],
    ["elephants", "img/elephants.png"],
];

const troop = {
    "rabbit": 10,
    "bear": 8,
    "elephants": 6,
    "giraffe": 4,
}

const diceButton = document.getElementById('roll-dice');
diceButton.onclick = dice;

const exchangeButton_rabbit = document.getElementById('rabbit-to-bear');
exchangeButton_rabbit.onclick = rabbitToBear;

function rabbitToBear(){
    // const elToDelete = document.getElementsByClassName(".rabbit")
    // elToDelete.splice(0, 6)
    addingAnimal("bear")

}

function dice() {
    const rNum1 = Math.floor(Math.random() * dice1.length);
    const rNum2 = Math.floor(Math.random() * dice2.length);
    document.getElementById("dice1").src = dice1[rNum1][1];
    document.getElementById("dice2").src = dice2[rNum2][1];

    if(dice1[rNum1][0] ==="wolf" || "wolf" === dice2[rNum2][0]){ // if wolf
        for(const key in troop) {
            const animalToDelete = document.querySelectorAll("."+key);
            troop[key] =troop[key] + animalToDelete.length;
        }

        const elToDelete = document.querySelectorAll(".animal");
        for (const el of elToDelete) {
            el.remove();
        }
    }

    else if (dice1[rNum1][0] === dice2[rNum2][0]) { // two same
            addingAnimals(dice1[rNum1][0], 2)
        }
    else if (dice1[rNum1][0] !== dice2[rNum2][0]){
        // kostka 1
        addingAnimals(dice1[rNum1][0], 1)
        // kostka 2
        addingAnimals(dice2[rNum2][0], 1)
    }
}


function addingAnimals(animal, x){
    const howMany = document.querySelectorAll("."+animal).length
    const howManyAdd = Math.floor((howMany + x )/2)
    troop[animal] = troop[animal] - howManyAdd


    if (troop[animal] >= 0){ //
        for (let i = 0; i < howManyAdd; i++) {
            addingAnimal(animal)
        }
    }
    if (troop[animal] < 0){
        for (let i = 0; i < ((howManyAdd - troop[animal])*-1); i++) {
        addingAnimal(animal)
        }
    }
    if(troop[animal] < 0){
        troop[animal] = 0
    }

}

function addingAnimal(animal){
    const el = document.createElement("img");
    el.src = "img/"+animal+".png";
    el.className = animal;
    el.classList.add("animal");
    troop[animal] =- 1

    const div = document.getElementById(animal);
    div.appendChild(el);
}

