function firstNonRepeatedChar(str) {
  // Create a frequency map
  const freq = {};

  // Count occurrences of each character
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  // If no non-repeated character found
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
