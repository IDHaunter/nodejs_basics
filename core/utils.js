function likeJSON(inputString) {
    const regex = /""/g;
    let match;
    const positions = [];
    let firstPart = '';
    let secondPart = '';
  
    while ((match = regex.exec(inputString)) !== null) {
        positions.push(match.index);
        firstPart = inputString.slice(0, match.index+1);
        secondPart = inputString.slice(match.index+1);
        inputString = firstPart + ',' + secondPart;
    }
  
    if (positions.length>0) {
        inputString = `[${inputString}]`;  
    }

    return inputString;
  }

  //---------------------------

  function makeInt(inputString) {
    // 100% copy of SQL-fuction MakeInt
    let result = 0;
    let outputString = '';
    let symbol = '';
    
    for (let pos = 0; pos < inputString.length-1; pos++) {
    symbol = inputString.charAt(pos);
    
      if ((symbol === '1') 
        || (symbol === '2')
        || (symbol === '3')
        || (symbol === '4')
        || (symbol === '5')
        || (symbol === '6')
        || (symbol === '7')
        || (symbol === '8')
        || (symbol === '9')
        || (symbol === '0'))
      {
        outputString = outputString + symbol;	
      }
  
    }
    
    if ( (outputString.length > 0) && (outputString.length < 9) ) {
      result = parseInt(outputString, 10); 
    } else {
      result = -1;
    }
  
  return result;
  }

  //---------------------------

  function now() {
    
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months in JavaScript begins from 0
    const day = currentDate.getDate();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return `${year}.${month}.${day} ${hours}:${minutes}:${ (seconds<10) ? '0' + seconds : seconds }`;
  }

  //module.exports.likeJSON = likeJSON;

  module.exports = {
    likeJSON: likeJSON,
    makeInt: makeInt,
    now: now,
  }