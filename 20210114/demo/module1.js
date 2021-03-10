// 导出语句 export
// export let userName = "小红";
let userName = "小红";
// export function hello(name) {
//   return "Hello" + name;
// }

function hello(name) {
  return "Hello" + name;
}
// export class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   show() {
//     return this.name + "今年" + this.age + "了";
//   }
// }
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

export { userName, hello, User };
