`use strict`;

//const flower = document.querySelector("#flower");
const flowertype = document.querySelector("#type");
const flowercolour = document.querySelector("#colour");
const poisonous = document.querySelector("#poison");
const price = document.querySelector("#price");


//read flower method
const readFlowers = () => {
    fetch("http://localhost:8082/flower/read")
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("I don't have a status of 200");
            } else {
                console.log(response);
                console.log(`response is OK (200)`);
                //json-ify it (which returns a promise)
                response.json().then((infofromserver) => {
                    console.log(infofromserver);
                    console.log(infofromserver.data);
                })
            }
        }).catch((err) => {
            console.error(err);
        })
}
readFlowers();


//create flower method
const createFlower = () => {
    const flowerType = flowertype.value;
    const flowerColour = flowercolour.value;
    const flowerPoison = poisonous.value;
    const flowerPrice = price.value;

    let data = {
        type: flowerType,
        colour: flowerColour,
        poisonous: flowerPoison,
        price: flowerPrice
    }
    fetch("http://localhost:8082/flower/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(info => {
            console.log(info);
        })
        .catch(err => console.error(`Stopppppp! ${err}`));
}
createFlower();



