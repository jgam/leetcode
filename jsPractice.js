//throttle
//every certain time execute some function


/* const throttle = (fn, time) => {
  let isThrottled;
  
  return (...args) => {
    if(!isThrottled){
      //set function
      isThrottled = true;
      fn(...args)
      setTimeout(() => (isThrottled=false), time)

    }
  }
}

var throttled = throttle((...args)=>console.log(...args), 1000)

throttled('1');
throttled('2');
throttled('3');
 */





//debounce
//execute only the last functoin if set time

/* const debouncing = (fn, time) => {
  //implement debounce
  let isSetTimedOut;
  return (...args) => {
    if(isSetTimedOut){
      clearTimeout(isSetTimedOut)
    }
    isSetTimedOut = setTimeout(() => fn(...args), time)
  }
}


const debounced = debouncing((...args) => console.log(...args), 1000)

debounced('shouldnt log out');
debounced('shouldnt log out');
debounced('should log out'); */

setTimeout(() => console.log('haha after 1 sec'), 1000)
setTimeout("console.log('haha after 2 seconds')", 1000)
