
// - index.js i aç.


// node'da fetch yok? fetch es6 ile gelmedi mi? fetch bir web api ve browserlarla beraber geliyor?
// Sıralı Çalışma
fetch("top-movies-2015.json")
  .then((response) => response.json())
  .then(function (movies) {
    console.log(movies);
    fetch("best-stocks-2015.json")
      .then((response) => response.json())
      .then(function (stocks) {
        console.log(stocks);
      });
  })
  .catch((err) => console.log(err));

// Sırasız Çalışma
/* console.log("ben senkron bir methodum 1")
console.log("ben senkron bir methodum 2")

fetch("top-movies-2015.json")
  .then((response) => response.json())
  .then(function (movies) {
    console.log(movies);
  });
fetch("best-stocks-2015.json")
  .then((response) => response.json())
  .then(function (stocks) {
    console.log(stocks);
  }); */

// async await
async function getBestOf2015() {
  const movies = await fetch("top-movies-2015.json");
  const stocks = await fetch("top-stocks-2015.json");

  console.log(movies);
  console.log(stocks);
}

getBestOf2015();
