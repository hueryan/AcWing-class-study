class Point {
  static cnt = 0

  constructor(x, y) {  // 构造函数
    this.x = x  // 成员变量
    this.y = y

    Point.cnt++
  }

  init() {
    this.sum = this.x + this.y  // 成员变量可以在任意的成员函数中定义
  }

  toString() {  // 成员函数
    return `(${this.x}, ${this.y})`
  }

  // 静态函数
  static print_class_name() {
    console.log("Point")
  }
}

// 继承
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }

  toString() {
    return `${this.color} ${super.toString()}`
  }
}

let main = () => {
  let p = new Point(3, 5)
  Point.print_class_name()
  console.log(p.x, p.y, p.toString())

  let cp = new ColorPoint(3, 4, 'red')
  console.log(cp.toString())

  for (let i = 0; i < 6; i++) 
    new Point(3, 7)

  console.log(Point.cnt)

}

main()