const getNumPaths = (m, n) => {
  if(m === 0 || n === 0) {
    return 1;
  } else {
    return getNumPaths(m-1, n) + getNumPaths(m-1,n-1) + getNumPaths(m, n-1);
  }
};

console.log(getNumPaths(4,5));
