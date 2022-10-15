function seek_pairs_that_sum_in_target(array, target){
    let count = 0;
    Array.from(array).forEach( item => {
        for(let element of array){
            if(array.indexOf(element) === array.indexOf(item)){
                continue
            }
            if(item + element === target){
                count++ 
            }
        }
    })
    return count/2;
}
document.write(seek_pairs_that_sum_in_target([1,2,2,3,4,5], 7))