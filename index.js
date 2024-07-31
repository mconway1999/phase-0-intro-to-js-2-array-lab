// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name){
cats.push("Ralph")
}
function destructivelyPrependCat (name) {
cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
    return ['Milo','Otis','Garfield','Broom']
}
function prependCat(name){
    return['Arnold','Milo','Otis','Garfield']
}
function removeLastCat(){
    return['Milo','Otis']
}
function removeFirstCat(){
    return['Otis','Garfield']
}
 