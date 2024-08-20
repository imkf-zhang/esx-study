let a =  new Promise(resolve => {
  setTimeout(() => {
      resolve('565656')
  }, 2000)
}).then(res => {
  console.log(res)
  // return res
  // return  Promise.resolve(res)
})

// console.log(a)'
a.then(res => {
  console.log('111',res)
})

// 上述：1、是同步的，按照时序执行的  
// 2、promise 既resolve 又 then 如上述，是需要返回一个值的

let timeout = 2500
let  b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2222')
  }, timeout);
}).then(res => {
  throw new Error(res); 
}).catch( res => {
  console.log('出错了', res)
  // return Promise.resolve('再来一个')
  return Promise.reject('再来一个')
})

b.then(res => {
  console.log(res)
}).catch(res => {
  console.log('出错了2', res)
})
// 可以得出结论 类似链式调用，是按照一定的时序在进行运算