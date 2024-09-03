import getHeroById from "./bases/09-imp-exp";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(2);
//         // resolve(heroe);
//         reject('Hero not found');
//     }, 2000);
// });

// promise.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.warn(err);
// });



const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero === undefined) {
                reject('Hero not found');
            } else {
                resolve(hero);
            }

        }, 2000);
    });

};

getHeroByIdAsync(1).then(console.log).catch(console.warn);