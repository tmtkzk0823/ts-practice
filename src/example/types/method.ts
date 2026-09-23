let culculator: { sum(x: number, y: number): number };

culculator = {
  sum(x, y) {
    return x + y;
  },
};

let check: number = culculator.sum(1, 2);
console.log(check);
