function delay(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Promise resolved after ${ms} milliseconds`);
      }, ms);
    });
  }
  
  async function asyncDelay(ms) {
    const result = await delay(ms);
    console.log(result);
  }
  
  asyncDelay(1000); // logs "Promise resolved after 1000 milliseconds" after 1 second