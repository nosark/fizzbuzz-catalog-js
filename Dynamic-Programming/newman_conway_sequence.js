/*
Newman-Conway Sequence

Newman-Conway Sequence is the one which generates the following integer sequence.
1 1 2 2 3 4 4 4 5 6 7 7…

In mathematical terms, the sequence P(n) of Newman-Conway numbers is defined by recurrence relation

P(n) = P(P(n - 1)) + P(n - P(n - 1))

with seed values P(1) = 1 and P(2) = 1

Given a number n, print n-th number in Newman-Conway Sequence.

Examples :

Input : n = 2
Output : 1

Input : n = 10
Output : 6
*/

//recursive
const newmanConwaySeq = (n) => {
  if(n === 1 || n === 2) {
    return 1;
  } else {
    return newmanConwaySeq(newmanConwaySeq(n - 1)) + newmanConwaySeq(n - newmanConwaySeq(n-1));
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
