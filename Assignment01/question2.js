
String.prototype.filterWords = function(args) {
  let result = this.toString();
  for(let i in args) {
    result = result.replace(args[i], "***");
  }
  return result;
}
console.log("This house is nice!".filterWords(['house', 'nice']));