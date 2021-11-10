const removeDuplicatesFromArray = (list) => {
    let noDuplicationArray = [];
    for (let i=0; i < list.length; i++){
        if (list[i] == list[i+1]){
            delete list[i]
        }
        else{
            noDuplicationArray.push(list[i])
        }
    }
    return noDuplicationArray;
}


export default removeDuplicatesFromArray