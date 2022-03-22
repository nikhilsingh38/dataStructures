function runProgram(input) {
  var input = input.trim().split("\n");
  var [N, K] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  console.log(UpperBound(N, K, arr));
}
function UpperBound(N, K, arr) {
  let res = -1;
  let low = 0;
  high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.round((high - low) / 2);
    if (K == arr[mid]) {
      low = mid + 1;
    } else if (K > arr[mid]) {
      low = mid + 1; //RHS
    } else {
      res = mid;
      high = mid - 1; //LHS
    }
  }
  return res;
}

if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
