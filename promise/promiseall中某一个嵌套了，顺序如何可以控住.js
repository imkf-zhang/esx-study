let promise1 = new Promise( (resolve, reject) => {
setTimeout( async function() {
 await new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('嵌套执行')
        resolve(33333)
      },9000)
    }).then(function(res) {
        console.log('嵌套结果打印',res)
    })
     resolve(111)
  },1000)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(function() {
     resolve(222)
  },6000)
})

Promise.all([promise1,promise2]).then(function(res) {
  console.log("all的结果",res)
}).catch(function(err) {
  console.log('发生错误111', err)
})

// 其实这样也可以控制住

