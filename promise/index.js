function say() {
  return new Promise(resolve => {
    setTimeout(() => {
      new Promise().then(function() {
        resolve('565656')
      })
    }, 2000)
  }).then(res => {
    console.log(res)
  })
}
say()