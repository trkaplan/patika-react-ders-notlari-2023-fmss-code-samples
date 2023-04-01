import axios from "axios";
async function getData() {
        const data = await axios("https://jsonplaceholder.typicode.com/users/1")
        console.log("user yüklendi", data);

        const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1")
        console.log("post 1 yüklendi", post1);
        
        const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2")
        console.log("post 2 yüklendi", post2);
    }
getData();