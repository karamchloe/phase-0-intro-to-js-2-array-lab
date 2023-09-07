// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph')

}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
   const newCat = [...cats]
   newCat.push(name)
   return newCat;
}

function prependCat(name) {
    const newCat = [name, ...cats];
    return newCat;
}
function removeLastCat() {
    const newCat = [...cats];
    newCat.pop();
    return newCat;

}

function removeFirstCat() {
    const newCat = [...cats];
    newCat.shift();
    return newCat;
}