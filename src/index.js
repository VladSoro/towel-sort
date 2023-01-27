
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix = matrix || [];
  return matrix.reduce((a, x, i) => {
      if (i % 2) {
          x = x.reverse();
      }
      return a.concat(x);
  }, []);
};

