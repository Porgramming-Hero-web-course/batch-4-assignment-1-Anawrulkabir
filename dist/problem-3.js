"use strict";
// Problem - 3 : Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
{
    const countWordOccurrences = (sentence, word) => {
        const caseInsensitiveSentence = sentence.toLowerCase();
        const caseInsensitiveWord = word.toLowerCase();
        const splittedSentenceArray = caseInsensitiveSentence.split(' ');
        const len = splittedSentenceArray.length;
        let count = 0;
        for (let i = 0; i < len; i++) {
            if (splittedSentenceArray[i] === caseInsensitiveWord)
                count++;
        }
        return count;
    };
    const res = countWordOccurrences('I love TypeScript typescript', 'typescript');
    console.log(res); // 2
}
