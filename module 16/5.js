class MathUtils {
  static Sum(arr) {
    return arr.reduce((acc, curr) => acc + curr);
  }
}
const arr1 = [5, 8, 87];

console.log(MathUtils.Sum(arr1));
