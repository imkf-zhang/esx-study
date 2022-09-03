class Color {
  constructor() {}
  say() {
    console.log('helloo')
  }
}
// node的编译器和浏览器的还不太一样，以下语法node会报错
// class Red extends Color {
//   constructor() {
//     super()
//   }
// }

// 类就是函数，类本身就指向他的构造函数
console.log(Color.prototype.constructor === Color) // true
