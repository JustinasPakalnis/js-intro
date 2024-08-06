const min = function(list){
    let minNum = Infinity;
    for (const count of list) {
        // console.log(count);
        if (count < minNum) {
            minNum = count;
        }
    }
    return minNum;
}

const max = function(list){
    let maxNum = -Infinity;
    for (const count of list) {
        // console.log(count);
        if (count > maxNum) {
            maxNum = count;
        }
    }
    return maxNum;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

console.log(max([-52, 56, 300, 29, -54, 0, -110]));

console.log('-------------------------------------------------------------------');

function past(h, m, s){
    let h1 = 0;
    let m1 = 0;
    let s1 = 0;
    if (h >= 0 && h <= 59) {
      h1 = h*3600000;
    }
    if (m >= 0 && m <= 59) {
      m1 = m*60000;
    }    
    if (s >= 0 && s <= 59) {
      s1 = s*1000;
    }
     return h1+m1+s1; 
      
      
  }


  console.log(past(1, 1, 1));