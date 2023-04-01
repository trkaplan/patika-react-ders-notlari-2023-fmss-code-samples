setInterval(()=>{
    console.log("1sn geçti")
},1000)


// şimdi kendimiz bir fonk. tanımlayalım: HİGHER ORDER Function

// bir methodu çalıştıran başka bir method yazalım:

function runFunction(callback, interval) {
    console.log("runFunction çağırıldı");
    setTimeout(callback, interval);
  }
  /* 
  const logMessage = () => console.log("merhaba");
   */
  function logMessage2() {
    console.log("merhaba");
  }
  runFunction(logMessage2, 2000);
  