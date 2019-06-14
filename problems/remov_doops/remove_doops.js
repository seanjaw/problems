function remove_duplicates(array){
    // will start a while looping and keep an object/ associated array. If i find an element
    // for the first time i will set its value as true (that will tell me element added once.).
    // if i find a element in the exists object, i will not insert it into the return array.
    let nonduplicates = {};
    let outputarray = [];
    let elm; 
    for (let i =0; i<length.array; i++){
        elm = array[i];
        if (!exists[elm]){
            outputarray.push(elm);
            exists[elm] = true;
        }
    }
    return outputarray;
}