// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 != 1)
// console.log(2 == 1)

// console.log("2" > 1) // these will not give predictable result when compare 2 different datatypes.
// console.log("02" > 1) // when we compare 2 differnt datatypes little confusion


/* 
The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisions convert null to a number , treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(null > 0); // null is empty so false
console.log(null == 0); // false
console.log(null >= 0); // true here value conversion problem  
console.log(null != 0); // true here comparision not equal to operator  so it is not 0 null not equal to zero returns true.

// null represents the intentional absence of any object value.
// It's not the same as 0, which is a numerical value.
// JavaScript's type coercion for comparisons can lead to unexpected results, as seen in null > 0 and null >= 0.
// Use strict equality (===) or inequality (!==) to avoid type coercion surprises and ensure more accurate comparisons.

// console.log(undefined == 0);  // false
// console.log(undefined == 1);  // false
// console.log(undefined >= 1);  // false
// console.log(undefined <= 1); // false
// console.log(undefined != 0); // true


// undefined will give you false
// In javascript equality check and comparision operators work differently

// Strict Check === checks datatype not only its value

console.log(2 == '2'); // true
console.log(2 === '2'); // false