/**
 * The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
 */

const productFib = (prod) => {
  let a = 0
  let b = 1

  while (a * b < prod) {
    const temp = a
    a = b
    b = a + temp
  }

  return [a, b, a * b === prod]
}

console.log(productFib(4895)) // [55, 89, true]
console.log(productFib(5895)) // [89, 144, false]
console.log(productFib(74049690)) // [6765, 10946, true]
console.log(productFib(84049690)) // [10946, 17711, false]
console.log(productFib(193864606)) // [10946, 17711, true]
console.log(productFib(447577)) // [610, 987, false]
console.log(productFib(602070)) // [610, 987, true]
// i dont really understand then I searched in chatgpt 😜
