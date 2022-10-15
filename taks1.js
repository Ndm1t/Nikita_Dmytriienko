function filter_list(array){return array.filter(item => typeof item === "number")}
document.write(filter_list(["a",1,2,"b","c",3]))