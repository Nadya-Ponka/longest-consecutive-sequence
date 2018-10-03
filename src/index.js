module.exports = function longestConsecutiveLength(array) {
    // your solution here
    let setFromArray = new Set(array);

		if (array.length === 0) return 0;
    if (array.length === 1) return 1;

    let maxLength = 1;
    let tempLength = 1;

    for (let value of setFromArray) {
        if (!setFromArray.has(value - 1)) {
            let temp = value;
            while (setFromArray.has(temp + 1)) {
                tempLength += 1;
                temp += 1;
            }

            maxLength = Math.max(maxLength, tempLength);
            tempLength = 1;
        }
    }
    return maxLength;
}
