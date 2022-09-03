class Book {
  constructor(x, y) {
    console.log(new.target === Book) // true
    // if (new.target === Book) {
    //   throw new error('Book类只能通过继承完成实例化')
    // }
    this.name = x
    this.sex = y
  }
}
console.log(Book.name)

class sf extends Book {
  constructor() {
    // console.log(new.target === Book)
    // console.log(new.target === sf)
  }
}

let h = new Book('1', '2')
let kate = new sf()
