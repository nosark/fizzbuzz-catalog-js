function houseRobberRecursive(nums) {
 if(nums.length === 0) {
  return 0;
 }

 if(nums.length === 1) {
  return nums[0];
 }

 if(nums.length === 2) {
  return Math.max(nums[0], nums[1]);
 }

 let stealOne = nums[0] + houseRobber(nums.slice(2, nums.length)); // steal from first house, then skip nums[1] and steal from then onwards
 let stealTwo = houseRobber(nums.slice(1, nums.length)); // what happens if I steal from second house onward

 return Math.max(stealOne, stealTwo);
}


const houseRobber = (loot) => {

};
