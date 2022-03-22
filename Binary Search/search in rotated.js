function runProgram(input) {
  var input = input.split("\n");
  var [n, k] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  console.log(Searchrotatedarray(n, k, arr));
}
function Searchrotatedarray(n, k, arr) {
  let low = 0;
  high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.round((high - low) / 2);
    let prev = (mid - 1) % n;
    let next = (mid + 1) % n;
    if (arr[mid] <= arr[next] && arr[mid] >= arr[prev]) {
      var i = mid;
      break;
    }
    if (arr[mid] >= arr[low]) {
      low = mid + 1;
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1;
    }
  }
  var x = BS(arr, 0, i - 1, k);
  var y = BS(arr, i + 1, arr.length - 1, k);

  if (x == -1 && y == -1) {
    return -1;
  } else {
    return x > 0 ? x : y;
  }
}

function BS(arr, l, h, k) {
  while (l <= h) {
    let mid = l + Math.round((h - l) / 2);

    if (arr[mid] == k) {
      return mid;
    } else if (k > arr[mid]) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
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
