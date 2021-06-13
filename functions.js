
function capitalice(text){
    let firstLetter = text[0].toUpperCase()
    return firstLetter + text.slice(1)
}

module.exports = {capitalice}