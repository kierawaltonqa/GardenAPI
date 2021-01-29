`use strict`;

//const flower = document.querySelector("#flower");
const flowertype = document.querySelector("#name");
const flowercolour = document.querySelector("#colour");
const poisonous = document.querySelector("#poisonous");
const price = document.querySelector("#price");
const height = document.querySelector("#height");
const flowerid = document.querySelector("#id");


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
    const flowerHeight = height.value;

    let data = {
        type: flowerType,
        colour: flowerColour,
        poisonous: flowerPoison,
        price: flowerPrice,
        height: flowerHeight
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


//delete flower method
const deleteFlower = () => {
    const flowerID = flowerid.value;

    let data = {
        id: flowerID
    }

    fetch(`http://localhost:8082/flower/delete/${flowerID}`, {
        method: "DELETE",
    })
        // .then(response => response.json())
        .then(response => console.log(`flower with ID ${flowerID} deleted`)
        )
        .catch(err => console.error(`Stop!! ${err}`));
}
