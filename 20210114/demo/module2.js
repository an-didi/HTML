// 导出语句 export

let userName = "小红";

function hello(name) {
  return "Hello" + name;
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    return this.name + "今年" + this.age + "了";
  }
}
// 模块中的私有成员，不能被外部访问
let gender = "男";

// 统一导出

export { userName as name, hello as echo, User };
