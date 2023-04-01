map for each async desteklemediğinden promises.all ile kullanılıyor.

const urls = ['https://example.com', 'https://google.com', 'https://yahoo.com'];

const responses = urls.map(url => fetch(url));

console.log(responses);
// Output: [Promise { <pending> }, Promise { <pending> }, Promise { <pending> }]

responses.forEach(response => {
  console.log(response);
  // Output: Promise { <pending> }
});

// We can't access the response data here because the promises are still pending



// fix:

const urls = ['https://example.com', 'https://google.com', 'https://yahoo.com'];

Promise.all(urls.map(url => fetch(url)))
  .then(responses => {
    responses.forEach(response => console.log(response));
  })
  .catch(error => console.error(error));