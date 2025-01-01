
function JadenCasing(phrase) {
    const words = phrase.split(" ")
    const result = words.map((word) => {
        return word.replace(word[0], word[0].toUpperCase())
    })

    return result.join(" ")
}


console.log(JadenCasing("How can mirrors be real if our eyes aren't real"));