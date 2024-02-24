function timeout(ms) {
  return new Promise((resolve, reject) => {
    x(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

// setTimeout参数解读的理解还是不到位，竟然忽略了可以传入第三个参数

// setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
// param1, …, paramN 可选
// 附加参数，一旦定时器到期，它们会作为参数传递给 functionRef 指定的函数。