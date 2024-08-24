// function fetchData() {
//     fetch('https://swapi.dev/api/people/3').then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//         }).catch((error) => {
//             console.log(error);
//         });
//     });
// }

async function fetchData() {
    try {
        const response = await fetch('https://swapi.dev/api/people/3');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const urls = ["https://swapi.dev/api/people/3", "https://swapi.dev/api/planets/4", "https://swapi.dev/api/starships/5"];



// fetchData();

async function fetchUrls() {
    try {
        for await (let url of urls) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchUrls();