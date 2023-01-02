function factorial1(n) {
  if (n === 0) return 1;
  return n * factorial1(n - 1);
}

console.log(factorial1(4));
