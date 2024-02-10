/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.round(Math.sqrt(c));

    while(a <= b){
        let current_sum = a**2 + b**2;
        if(current_sum == c){
            return true;
        } else if (current_sum < c){
            a++;
        } else {
            b--;
        }
    }
    return false;
    
};
