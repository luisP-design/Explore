const hero = document.getElementById('header');
const heroFTitle = document.getElementById('hero-place-title');
let images = ['Dubrovnik-Ragusa', 'Santorini-Greece', 'Hawaii-Estados-Unidos', 'California-Estados-Unidos'];

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
