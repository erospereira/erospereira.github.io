
    
    let x = parseInt(document.getElementById('temperature').innerHTML);

  
let y = parseInt(document.getElementById('windSpeed').innerHTML);

let result = 35.74 + 0.6215 * x - 35.75 * Math.pow(y, 0.16) + .4275 * x * Math.pow(y, 0.16);

document.getElementById('output').innerHTML = result.toFixed(1);


