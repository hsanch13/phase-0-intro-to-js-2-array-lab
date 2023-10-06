const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
   
function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Bob");
}

function appendCat() {
    const copyCats = [...cats, "Broom"];
    return copyCats;
}

function prependCat() {
    const copyCat2 = ["Arnold", ...cats];
    return copyCat2;
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
    
}