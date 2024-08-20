// promis用于异步回调
// 有缺点么？有，
// 1、如果不设置错误回调函数，内部发生错误不会反映到外部
// 2、一旦开始，没法停止
// 3、pending的时候就傻了呀，根本不知道进展的如何了


// 1、正常的使用
let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, '执行');
})
promise1.then( res => { console.log(res) }) // 一秒后打印'执行'

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw Error('抛出错误')
    } catch (error) {
      reject(error)
    }
  }, 1000);
})
promise2.then(res => {
  console.log('1', res) // 直接就不会走then的逻辑，想啥呢
}).catch(err => {
  console.log('promise2抛出错误', err) // 一秒后将错误信息打印出
})

let promise3 = new Promise((resolve, reject) => {
  if("success") {
    resolve()
  }else {
    reject()
  }
}) 
// 2、new promise 会立即执行
// let