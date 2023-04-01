function topla(a,b){
    return a+b;
}


/* Alternatif - 1
const topla = function topla(a,b){ // named function  
    return a+b;
}

/* Alternatif - 2 */
const topla = function(a,b){ // anonymous function
    return a+b;
}

/* Yol 3 */
// arrow function
const topla = (a,b) => { 
    return a+b;
}
// NOT: arrow function ile regular'ın farkı dökümanda mevcut.
export default topla;

