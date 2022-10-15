function sum(number){
    if(number/10 < 1) return number; 
    return sum(Array.from(number.toString()).reduce((previousValue,currentValue) => parseInt(previousValue) + parseInt(currentValue)))
}
document.write(sum(5132124))