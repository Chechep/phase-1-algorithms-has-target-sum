function hasTargetSum(array, target) {
   // Create a Set to store numbers we've seen
   const seenNumbers = new Set();

   // Loop through each number in the array
   for (const num of array) {
     const complement = target - num; // Find the missing pair
 
     // If the complement is in the Set, return true
     if (seenNumbers.has(complement)) {
       return true;
     }
 
     // Otherwise, add the current number to the Set
     seenNumbers.add(num);
   }
 
   // If no pairs are found, return false
   return false;
}

/* 
  Write the Big O time complexity of your function here
  - Time Complexity: O(n) -> We iterate through the array once.
  - Space Complexity: O(n) -> We store up to n elements in a Set.
*/

/* 
  Add your pseudocode here
  1. Create an empty Set called `seenNumbers`
  2. Loop through each element `num` in the `array`:
     - Calculate the complement: `target - num`
     - If `complement` is already in `seenNumbers`, return `true`
     - Otherwise, add `num` to `seenNumbers`
  3. If no pairs are found, return `false`
*/

/*
  Add written explanation of your solution here
   - Instead of using a nested loop (O(n²)), we use a Set to check for complements in O(1) time.
  - This ensures that we only loop through the array **once**, making it much more efficient.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 6));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 1));
}

module.exports = hasTargetSum;
