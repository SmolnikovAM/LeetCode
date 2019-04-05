var searchInsert = function(nums, target) {
  
  nums.unshift(-(2**32));
  nums.push(2**32);
  
  const binary = (i, j) => {
    if(i >= j) return false;
    
    const mid = ~~((i + j)/2);
    
    if(target === nums[mid]){
      return mid ;
    }
    if(target < nums[mid]){
      const r = binary(i, mid);      
      if(r) return r;      
      else return i
    }else{
      const r = binary(mid + 1, j);
      if(r) return r;      
      else return j
    }
  }
  
  return binary(0, nums.length) - 1; 
};
