'use strict'
//Calculation Average Score for Teams

//This is my function before seeing the solution
/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const checkWinner = function (score1Dolphins, score2Dolphins, score3Dolphins, score1Koalas, score2Koalas, score3Koalas) {
    const avgDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins)
    const avgKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas)
    const compareAvg = avgDolphins - avgKoalas;
    const compareDouble1 = avgDolphins / avgKoalas
    const compareDouble2 = avgKoalas / avgDolphins
    if (compareAvg > 0 && compareDouble1 > 2) {
        console.log(`Dolphins win` + `(${avgDolphins} vs. ${avgKoalas})`)
        return '';
    } else if (compareAvg < 0 && compareDouble2 > 2) {
        console.log(`Koalas win` + `(${avgKoalas} vs. ${avgDolphins})`)
        return '';
    } else {
        console.log('No team win')
        return '';

    }

}
//Test Data 1
console.log(checkWinner(44, 23, 71, 65, 54, 49))

//Test Data 2
// console.log(checkWinner(85, 54, 41, 23, 34, 27)) */


//My Practice after solution
//=====================================================================================

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


/* //Test Data 1:
const avgDolphins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49) */

//Test Data 2:
const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

console.log(`Averga Score of Dolphins is ${avgDolphins}, Koalas is ${avgKoalas}`)
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
        return '';
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win` + `(${avgKoalas} vs. ${avgDolphins})`)
        return '';
    } else {
        console.log('No team win')
        return '';

    }

}

checkWinner(avgDolphins, avgKoalas)
// const theWinnner = checkWinner(avgDolphins, avgKoalas)
