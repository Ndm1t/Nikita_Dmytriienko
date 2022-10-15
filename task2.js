function first_non_repeated_letter(exp){
    for(let item of exp){
      let count = 0;
      let index = exp.indexOf(item)
      while(index != -1){
          count++ 
          index = exp.indexOf(item, index + 1)
      }
      if(count === 1){
          return item
      }
    }
  }