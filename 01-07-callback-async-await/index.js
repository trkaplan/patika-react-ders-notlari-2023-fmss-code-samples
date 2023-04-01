import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then(function(users) {
    console.log(users);
})

// peki birden fazla istek atmamız gerekse ve sırayla gelmesi için: 
/* 
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then(function(user) {
    console.log("user yüklendi", user);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then(function(post) {
        console.log("post yüklendi", post);
    })

})
 */

// alt alta yazsaydık bu sıra bozulabilirdi:

/* fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then(function(user) {
    console.log("user yüklendi", user);
})

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then(function(post) {
    console.log("post yüklendi", post);
}) */