# 对于 JS 中解构的补充和函数原型中 bind(),call()和 apply()三种方法的演示以及访问器属性的实现

## 一、对于数组和对象解构的补充

解构赋值：快速从集合数据（数组/对象）解构出独立变量

`1.数组解构`

在对数组进行解构时，等号两边的类型要一致。对于数组来说，它里边的元素都是有顺序的，想要通过解构赋值来得到某一个位置的元素是可行的。可以同时获得数组中的多个值，固定位置的值，一个值等。

例如：

```js
let arr = [1, 2, 3, 4];
// 将数组中的3得到，赋给a

// 逗号不能省略
let [, , a] = arr;
console.log(a);
// 此时a = 3;
// 想要数组索引2后边的所有元素，可以使用 ... 方法，将其变为一个数组
[, , ...a] = arr;
console.log(a);
// 此时a = [3,4];
```

`2.对象解构`

对象进行解构时，两边的属性名要一一对应，对象中的属性是无序的，只要属性名对了就行。进行解构时，等号左边是不允许出现大括号的，这样程序会将其识别为代码块，所以需要转为表达式，只需要加上一个小括号就行。

解构示例：

```js
let user = {
        id: 1,
        name: "小花",
        age: 18,
      };
let { id, name } = user;
{id, name} = user;
({id, name} = user);
console.log(id, name);
```

对象解构支持起别名操作，它可以解决的问题：

`解决与全局变量名相同的冲突问题`

`解决对象中出现多个单词的属性名称`

例如：我们在全局中声明一个 name 变量，然后 user 对象中也有一个 name 属性，这时候再使用 name 进行解构赋值，要不就是会起冲突，要不就会覆盖原来的值

```js
let name = "小草";
//   let { id, name } = user;
//这样会直接报错,因为name是个变量，他不能重复声明
let { id, name: myname } = user;
console.log("name = %s  myname = %s", name, myname);
```

`3.参数解构`

对于如果参数是数组和对象的情况

```js
// 数组传参

let sum = ([a, b]) => a + b;
console.log(sum([10, 25]));

// 对象传参

let getUser = ({ name, age }) => [name, age];
console.log(getUser({ name: "小树苗", age: 3 }));
```

## 二、bind(),call(),apply()方法的示例

bind 方法，call 方法，apply 方法都是定义在原型上的方法，每个函数一开始定义都会有。

`1.bind()方法`

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。bind()方法的作用就是动态的去改变 this 的指向。

例子：

```js
function hi(name) {
  // this.name = name;
  console.log(this.name);
}
const obj = { name: "user" };

// 经典调用
console.log(hi("流萤"));
// 使用bind()绑定方法，将hi()函数绑定到obj对象字面量中去
// bind()并不会立即执行,只返回一个函数声明
let f = hi.bind(obj);
console.log(f());
// 输出的值为user;
// 将函数的this指向obj对象
// 对象并不是一个作用域，在对象字面量中使用this会被指向window，一旦使用bind()方法，this的指向就会动态的指向这个对象字面量中
```

`2.call()方法`

call()方法允许属于被分配并要求一个不同的对象的一个对象的功能/方法。call()为 this 函数/方法提供新的值。使用 call()，可以只编写一次方法，然后在另一个对象中继承该方法，而不必为新对象重写该方法。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// 输出结果是cheese
```

call()方法可以链接构造函数的构造方法，也可以和 bind()方法一样，改变 this 的指向

`apply()方法`

apply()方法调用具有给定 this 值的函数，并以数组（或类似数组的对象）的形式提供。

它使用时语法和 call()方法相似，唯一不同的就是 call()的入参是值，而 apply()的入参是一个数组。

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7
```

## 三、访问器属性

访问器属性它不是一个属性，它是一种方法，是将方法伪装成属性去在外部操作的一种方法

它拥有两种方法，一个是 get()获取这个方法，另一个是 set()修改这个方法

```js
// 创建一个对象字面量
const product = {
  data: [
    { name: "暖手宝", price: 20, num: 1 },
    { name: "椅子", price: 40, num: 4 },
    { name: "桌子", price: 400, num: 2 },
  ],
  getAmounts() {
    return this.data.reduce((t, c) => (t += c.price * c.num), 0);
  },
  // 访问器属性：将方法伪造成一个属性
  // get方法，将一个方法伪造成一个属性
  // set方法，修改这个方法
  get total() {
    return this.data.reduce((t, c) => (t += c.price * c.num), 0);
  },
  set setPrice(price) {
    this.data[1].price = price;
  },
  // 访问器属性的优先级是高于普通属性的
};
console.log("总金额：", product.getAmounts());
// 使用访问属性的形式去访问一个方法
console.log("总金额：", product.total);
// 使用修改属性的形式去修改一个方法
product.setPrice = 999;
console.log(product.data[1].price);
```

访问器属性的优先级是高于一般的普通属性的，外界对于这个方法的访问是以属性的方式进行的，如果不设置修改方法，那么就只能读取操作，修改操作会报错。一般访问器属性是用在类中的私有属性上的。
