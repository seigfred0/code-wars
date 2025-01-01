
function XO(str) {
    const newStr = str.toLowerCase();
    const letters = newStr.split("");

    const exs = letters.filter((x) => x == 'x');
    const os = letters.filter((o) => o == 'o');

    return exs.length === os.length ? true : false;
}

console.log(XO('XXoo'))





/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/


/* 

OPTIMIZED BY AI

function XO(str) {
  const letters = str.toLowerCase().split("");

  let exs = 0;
  let os = 0;

  for (const letter of letters) {
    if (letter === 'x') exs++;
    if (letter === 'o') os++;
  }

  return exs === os;
}


*/