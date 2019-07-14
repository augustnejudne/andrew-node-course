const x = {
  a: 5,
  b: 2,
  c() {
    return this.a * this.b;
  },
};

console.log(x.c());
