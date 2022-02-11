let obj = new Proxy(
  {},
  {
    get: function (target, key, receiver) {
      console.log(`getting${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      console.log(`setting${key}!`);
      return Reflect.get(target, key, value, receiver);
    },
  }
);
obj.count = 1

++obj.count
/**
 * 上面代码对一个空对象架设了一层拦截，
 * 重定义了属性的读取（get）和设置（set）行为。
 * 这里暂时先不解释具体的语法，只看运行结果。
 * 对设置了拦截行为的对象obj，去读写它的属性，
 * 就会得到下面的结果。
 */
//settingcount!
//gettingcount!
//settingcount!


// es6 提供了proxy构造函数生成proxy实例
// proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。
// 其中，new Proxy()表示生成一个Proxy实例，
// target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。