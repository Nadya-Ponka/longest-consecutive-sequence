module.exports = function longestConsecutiveLength(array) {
  // your solution here
  
	if (array.length == 0) return 0;
	if (array.length === 1) return 1;
   
	array.sort((current, next) => {return current - next;});
	
    let max = 1;
    let count = 1;
	let i;
	let len=array.length-1;
	
    for (i = 1; i <= len; ++i) {
        if (array[i] == array[i - 1]) continue;
        if (array[i] - 1 == array[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(count, max);
    }
    return max;
}
