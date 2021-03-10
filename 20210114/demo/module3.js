// 默认模块
// export default let userName = "小红";
// 上面报错的原因是：default可以视为一个变量，default = userName;相当于赋值
let userName = "小红";
// export default userName;

// 一个模块中只允许一个默认导出
// export default function hello(name) {
//   return "Hello" + name;
// }
function hello(name) {
  return "Hello" + name;
}

// 默认导出的成员不需要加大括号

// 导出列表中既有默认成员，也有普通成员

let gender = "男";
// 将成员导出，将hello视为默认成员导出，其他成员为普通成员
export { userName, hello as default, gender };
