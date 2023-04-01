const fetch = require('node-fetch');

async function postData(query, body) {
  body = JSON.stringify(body);
  query = new URLSearchParams(query).toString();

  const res = await fetch("/myendpoint?" + query, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();
  console.log(data);
}

postData({ param1: "value1", param2: "value2" }, { key1: "value1", key2: "value2" });


// bu da axios ile:
// await axios.post("/myendpoint", { params: query, body });