// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let allDirectors = movies.map((elem) => {
        return elem.director;
    });

    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    let dramaStevenList = movies.filter ((elem) => {
        if (elem.genre.includes("Drama") && elem.director == "Steven Spielberg"){
            return 1;
        } else {
            return 0;
        }
    });

    return dramaStevenList.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(average) {

    if (average.length == 0) {
        return 0;
    }

    let averageRate = average.reduce((sum, elem) => {
        if(!elem.rate) {
            return sum;
        }
        return sum + elem.rate;
    }, 0);

    return averageRate / average.length;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(average) {

    let dramaAverage = average.filter((sum, elem) => {
        if (elem.genre.includes("Drama")) {
            return 1;
        }
    });

    let addNumbers = function(dramaAverage){
        let sum = 0;
        for(let rate = 0 ; rate < dramaAverage.length; rate ++) {
            sum = sum + dramaAverage[rate]
        }
            return sum / nums.length
    }
         let output = addNumbers (dramaAverage);
        return output
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    let clonedArray = JSON.parse(JSON.stringify(movies))
    clonedArray.sort ((movies1, movies2) => {

        if (movies1.year > movies2.year) {
            return 1;
        }
        else if (movies1.year < movies2.year) {
            return -1;
        }
        else if (movies1.year == movies2.year ) { 
            if (movies1.title > movies2.title) {
                return 1;
            }
            else {
                return -1;
            }};           
    })
    return clonedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    let clonedArray = JSON.parse(JSON.stringify(movies))
    clonedArray.sort ((movies1, movies2) => {

        if (movies1.title > movies2.title) {
            return 1;
        }
        else if (movies1.title < movies2.title) {
            return -1;
        }
            
    })
    
    let titleArray = clonedArray.map(movie => {
       return movie.title;
    });

    if (titleArray.length > 20) {
        return titleArray.slice(0, 20) ;
    } 
    return titleArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
