'use strict';
const SquareFootage = document.querySelector("#SquareFoot");
const GardenId = document.querySelector("#GardenId");
const Peeps = document.querySelector("#peeps");

const printSquareFootageToScreen = (SquareFootage) => {
    let SF = document.createElement("p");
    let text = document.createTextNode(`${SquareFootage}`);
    SF.appendChild(text);
    Peeps.appendChild(SF);

}

const retrieveData = () => {
    fetch("http://localhost:8082/flower/read")
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(`i dont have the data`);

            } else {
                console.log(`response is okay`);

                response.json().then((infofromserver) => {
                    console.log(infofromserver);
                    console.log(infofromserver.data);
                    // for (let garden of infofromserver.data) {
                    //     console.log(garden.squareFootage);
                    //     printSquareFootageToScreen(garden.squareFootage);
                    // }
                })
            }
        }).catch((error) => {
            console.error(error);
        })
}

retrieveData();


// const createGarden = () => {
//     const sfValue = SquareFootage.value;
//     const idValue = GardenId.value;

//     let data = {
//         squareFootage: sfValue,
//         id: idValue,
//     }

//     fetch("http://localhost:8082/garden/create", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(response => response.json())
//         .then(info => console.log(info))
//         .catch(err => console.error(`stoooop plese ${err}`))


// }



