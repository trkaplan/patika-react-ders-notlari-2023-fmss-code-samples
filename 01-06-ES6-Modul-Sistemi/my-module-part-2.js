export const topla = (a, b) => a + b;
export const cikar = (a, b) => a - b;
export const cikar2 = (b) => a


index.js'de 
import { topla, cikar } from ....

'Ya da daha kısası 
    `
const topla = (a,b) => a+b;
const hello = () => console.log("hello);

export {topla, hello}


export const hello = (name) => console.log(name) // parantezsiz de olur

export const hello = name => console.log("hello " + name) // parantezsiz de olur


template literal ile yazdır.


- sonra cikar fonk. ekle
- diğer tarafta import etmeden burdan da export etmeden çalıştırmayı dene. 
- default olarak export et. importta süslü dışına çıkar
- sadece function değil, string, obje de export edebilbiiz. meseal users (name, surname).. CONSTANT vs. 
