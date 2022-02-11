let proxy = new Proxy({},{
  get: function(target, propkey) {
    return 35
  }
})

console.log(proxy.time) // 35
console.log(proxy.sex) // 35
console.log(proxy.age) // 35