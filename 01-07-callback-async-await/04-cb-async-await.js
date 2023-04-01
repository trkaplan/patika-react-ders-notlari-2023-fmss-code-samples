import fetch from "node-fetch";

/* async function getData() {
    const data = fetch("https://jsonplaceholder.typicode.com/users/1")
    console.log("user yüklendi", data);
}
getData(); */


// !!!!!!
    // 4.satırda awaitsiz promise döndü. sonra await ekle.
    // .json() ı ekle.

    // sonra iki fetch daha ekle: sıralama korunacak:

    //sonra .json'ı ekledin ama sonuç bozuldu: 
    // 
    async function getData() {
        const data = (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
        console.log("user yüklendi", data);

        const post1 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
        console.log("post 1 yüklendi", post1);
        
        const post2 = (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
        console.log("post 2 yüklendi", post2);
    }
    getData();


    // çift awaitli hali: //                SORU: neden böyle bir şeye ihtiyaç duyulmuş? chatgpt ye soralım:
    // why should I use another await to use .json() in node-fetch 
    // why did they decide to return a promise for json() method? 



    /* async function getData() {
        const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
        console.log("user yüklendi", data);

        const post1 = await ((await fetch("https://jsonplaceholder.typicode.com/posts/1"))).json()
        console.log("post 1 yüklendi", post1);
        
        const post2 = await ((await fetch("https://jsonplaceholder.typicode.com/posts/2"))).json()
        console.log("post 2 yüklendi", post2);
    } */


    // SON:
    // getData(); yazmak yerine direk çağırmak isteseydik?
    // normalde IIFE şöyle :

/* (()=>{
    ...
})();
buna ek olarak başına async ekliyoruz.

( async ()=>{
...
})(); */