// Promises

const getComments = () => { // burda yine çalışır ama resolve reject olmadığından aşağıdaki then den sonraki bitti çalışmaz!
  return new Promise(() => {
    console.log("comments called");
  });
};
getComments().then(()=>console.log("bitti"));


/* const getComments = () => {
  return new Promise((resolve, reject) => {
    const sampleResponse = { id: 1, text: "This is my comment." };
    resolve(sampleResponse); // resolve e geçtiğin parametre sonuç olarak döner. then'İn içindeki callback'in paramına.
  });
}; */


/*
getComments()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e));
 */


  // Promise Örnek 2
/* ---------------------------------------------------------------------------
const getComments = (number) => { // burda artık bir de parametre ekledik promisimize. 
  return new Promise((resolve, reject) => {
    if (number == 1) {
      const sampleResponse = { id: 1, text: "This is my comment." };
      resolve(sampleResponse);
    } else {
      reject(new Error("not ok")); // düz string dönmedik, daha uygun olan bir error fırlattık, hem debug'ı kolay.
    }
  });
};

getComments()
  .then((data) => console.log("comments loaded", data))
  .catch((e) => console.log(e));
*/

// sonraki dosyadaki örnekte fetch kullancaz yani içerde artık async bir olay olacak. 