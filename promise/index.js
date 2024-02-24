function say() {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve('565656')
    }, 2000)
  }).then(res => {
    console.log(res)
  })
}
say()