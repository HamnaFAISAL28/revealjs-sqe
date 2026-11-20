// intentional issues for demo
var unused = 42;               // unused variable
function check(x) {
  if (x == null) {             // loose equality
    console.log("null");       // console.log left in code
  }
}
function dup1() { return "same logic"; }
function dup2() { return "same logic"; }