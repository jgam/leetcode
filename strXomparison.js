var largestNumber = function(nums) {
    let stringNums = nums.map(eachNum => String(eachNum));
    let solution = stringNums.sort((a,b) => a.concat(b) > b.concat(a) ? -1 : 1).join("");
    return solution[0] === '0' ? '0' : solution
};
