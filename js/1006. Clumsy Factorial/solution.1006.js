/**
 * @param {number} N
 * @return {number}
 */


var clumsySecond = function(N) {
    if(N === 1) return 1;
    if(N === 2) return 2;
    if(N === 3) return 6;
    if(N === 4) return 7;
    
    let sum = Math.floor(N * (N - 1) / (N - 2)) + N - 3;
    N -= 4;
    while(N >= 4){
        sum = sum - Math.floor(N * (N - 1) / (N - 2)) + N - 3;
        N -= 4;
    }
    
    switch(N){
        case 0:
            return sum;
        case 1:
            return sum - 1;
        case 2:
            return sum - 2;
        case 3: 
            return sum - 6
        case 4:
            return sum - 5
    }
    
};
