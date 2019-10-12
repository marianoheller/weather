const getFirstUnique = str => {
  const strArr = str.split("");
  const count = strArr.reduce((acc, char) => {
    if (!acc[char]) acc[char] = 1;
    else acc[char] += 1;
    return acc;
  }, {});
  return strArr.find(char => count[char] === 1);
};

/**
 * This approach takes O(n) time "scanning" the target string twice,
 * the first time to create create a count register of every character
 * and the second one to actually find the first character and fullfills
 * the count = 1 condition.
 * This could be improved by storing the index of the character first occurrence
 * and scanning the count object instead of the string
 */

module.exports = getFirstUnique;
