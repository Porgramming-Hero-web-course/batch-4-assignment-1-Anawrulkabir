// Problem - 3 : Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const caseInsensitiveSentence: string = sentence.toLowerCase()
    const caseInsensitiveWord: string = word.toLowerCase()

    const splittedSentenceArray: Array<string> =
      caseInsensitiveSentence.split(' ')
    const len: number = splittedSentenceArray.length

    let count: number = 0
    for (let i = 0; i < len; i++) {
      if (splittedSentenceArray[i] === caseInsensitiveWord) count++
    }
    return count
  }

  const res = countWordOccurrences('I love TypeScript typescript', 'typescript')
  console.log(res) // 2
}
