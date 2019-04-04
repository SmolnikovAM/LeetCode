/**
 * @param {number[]} height
 * @return {number}
 */


var maxArea = function(height) {
    let space = 0;
    const len = height.length;
    for(let i=0; i < len - 1; i += 1){
        if(space < height[i] * len ){
            for(let j = i + 1; j < len; j += 1){
                const newSpace = Math.min(height[i], height[j]) * (j - i);
                space = newSpace > space ? newSpace : space;
            }
        }
    }
    return space;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 2) return Math.min(height[0],height[1]);

    let maxarea = 0;
    let r = height.length - 1;
    let l = 0;


    while(l < r) {
        const hl = height[l];
        const hr = height[r];
        const area = Math.min(hr, hl) * (r - l);
        maxarea = Math.max(maxarea, area);
        if(hr > hl){
            l += 1;
        }else{
            r -= 1;
        }
    }
    return maxarea;
};
