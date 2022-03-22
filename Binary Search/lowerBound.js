var arr = [1, 1, 2, 2, 5]
var [N, K] = [5, 2]


function Lowerbound(N, K, arr) {
  let res = -1;

  let low = 0;
  high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.round((high - low) / 2);

    if (K == arr[mid]) {
      high = mid - 1;
      res = mid;
    }

    if (K > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
}

console.log(Lowerbound(N, K, arr))