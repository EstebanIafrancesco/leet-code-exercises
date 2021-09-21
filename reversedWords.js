const str = "Hellow how are you doing today";
let reversedWords = str
  .split(" ")
  .map((el) => {
    return el.split("").reverse().join("");
  })
  .reduce((acc, ini) => {
    return acc + " " + ini;
  }, str + '  -> reverse each word -> ');
console.log(reversedWords);
