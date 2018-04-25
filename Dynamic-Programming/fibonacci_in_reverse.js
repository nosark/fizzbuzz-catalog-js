

const fibonacciInReverse = (n) => {
  const arr = [];
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }

  arr[0] = 0;
  arr[1] = 1;

  for(let i =2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  console.log(arr.reverse());
}


fibonacciInReverse(8);
