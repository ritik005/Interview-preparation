function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let charIndexMap = {}; 

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        charIndexMap[char] = right;
    }

    return maxLength;

}

//For the purpose of user debugging.
lengthOfLongestSubstring("abcabcbb");