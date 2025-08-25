function getFreqOfWords(sentence){
    if(typeof sentence === null || typeof sentence === undefined){
        return undefined;
    } 
    let words = sentence.toLowerCase().split(" ");
    let freq = {};
    for(let word of words){
        if(freq[word] === undefined){
            freq[word] = 1;
        }
        else {
            freq[word] = freq[word]+1
        }
    }
    return freq
}

console.log(getFreqOfWords('Today is present and present is your gift'))