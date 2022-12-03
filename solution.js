function solution(nums) {
    let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k = j+1; k < nums.length; k++) {
        arr.push(nums[i]+nums[j]+nums[k]) 
      }
    }
  }
  
  for (let i = 0; i*i < arr.length; i++) {

    i
  }
  
  
  return answer;
}