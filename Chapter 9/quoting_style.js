var text = "He said 'I will eat uncle's beard!' and after that he died."

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'))

// num = "11222333";
// console.log(num.replace(/(\d+)(\d{3})/, "$1---$2"))
