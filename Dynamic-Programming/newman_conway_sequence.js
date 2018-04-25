//recursive
const newmanConwaySeq = (n) => {
  if(n ===1 || n ===2) {
    return 1;
  } else {
    return newmanConwaySeq(newmanConwaySeq(n-1)) + newmanConwaySeq(n - newmanConwaySeq(n-1));
  }
};

console.log(newmanConwaySeq(10));

const seqDP = (n) => {
  const arr = [0, 1, 1];

  for(let i = 3; i <= n; i++) {
    arr[i] = arr[arr[i-1]] + arr[i - arr[i-1]];
  }

  return arr[n];
}

console.log(seqDP(10));
