const hero = document.getElementById('header');
const heroFTitle = document.getElementById('hero-place-title');
let images = ['Dubrovnik-Ragusa', 'Santorini-Greece', 'California-Estados-Unidos'];

function stringDivi(string) {
    let name = string.split('-');
    if (name.length == 2) {
        return name[0] + ", " + name[1]
    } else {
        return name[0] + ", " + name[1] + " " + name[2]
    }
}

function bgImage(imgName) {
    let num = Math.floor(Math.random() * imgName.length);
    hero.style.backgroundImage = `url(./images/${imgName[num]}.jpg)`;
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPositionY = "center";
    heroFTitle.innerHTML = `${stringDivi(imgName[num])}`;
}

bgImage(images)

/* CARDS */
let cardsBlock = [];

const addCard = (card, num, namePlace) => {
    cardsBlock.push({card : document.getElementById(`${card}`)})
    let cardSel = cardsBlock[num].card
    cardSel.style.backgroundImage = `url('./images/${namePlace}.jpg')`
    cardSel.style.backgroundSize = '108%'
    cardSel.style.backgroundPosition = 'center'
    cardSel.style.transition = "all 1s"
    cardSel.addEventListener("mouseover", ()=> {
        cardSel.style.backgroundSize = "115%"
    })
    cardSel.addEventListener("mouseout", ()=> {
        cardSel.style.backgroundSize = "108%"
    })
}

addCard("card-1",0, "Noruega_001")
addCard("card-2",1, "Argentina_001")
addCard("card-3",2, "EstadosUnidos_001")
addCard("card-4",3, "Mexico_001")

