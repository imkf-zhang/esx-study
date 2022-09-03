// es5的属性名都是字符串，这个很容易属性名的冲突。能够保证每个属性名的都是独一无二的就好了，这就引入了symbol。

// symbol 值是通过symbol函数生成，不能用new命令，否则会报错。这是因为symbol是一个原始类型的值，不是对象，不是对象自然就不能添加属性

// symbol函数可以接受一个字符串作为参数，表示对symbol实例的描述（用于区分）。仅仅是描述而已，尽管描述相同，但是symbol函数返回的值是不一样的。
let a = Symbol('5000')
let b = Symbol('5000')
console.log(a === b)  // false

// symbol的原型对象上有一个description属性，值是symbol的描述
console.log(a.description)  // 5000

// symbol不能用于运算
// let c = a  + 85  // Cannot convert a Symbol value to a number 无法将符号值转换为数值
// let = "dsda" + a  // Cannot convert a Symbol value to a string  无法将符号值转换为字符串

// 但是symbol可以转换为布尔值
console.log(Boolean(a))  // true

// Symbol值运用 作为对象属性名的symbol
let d = {}
d[b] = 'hello'
let e = {
  [b]: 'hello'
}
let f = {}
Object.defineProperty(f,b,{value: 'hello'})
console.log(d[b])
console.log(e[b])
console.log(f[b])