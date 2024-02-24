let promise1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('嵌套执行')
        resolve(33333)
      },0)
    }).then(function(res) {
        console.log('嵌套结果打印',res)
    })
     resolve(111)
  },1000)
})

let promise2 = new Promise((resolve, reject) => {
  // try {
    // throw new Error('Parameter is not a number!');
  // } catch (error) {
  //   reject(error)
  // }
  
  setTimeout(function() {
     resolve(222)
  },6000)
})

Promise.all([promise1,promise2]).then(function(res) {
  console.log("all的结果",res)
}).catch(function(err) {
  console.log('发生错误111', err)
})

// 所有的都正确了走then   只要有一个错误就会回走catch

//如果某一个中嵌套有promise 那么执行顺序是如何的: 各走各的，控制不住

// 打印的结果
// 嵌套执行
// 嵌套结果打印 33333
// all的结果 [ 111, 222 ]