# JS 中的函数提升和重写问题以及四种高阶函数的分析

## 一、js 中的基本数据的类型转换问题

js 中的变量类型分为原始类型和引用类型，其中原始类型包括：1.数值，2.字符串，3.布尔类型，4.undefined 类型，5.null（空对象）类型，6.符号（Symbol）类型；引用类型包括：1.对象，2.数组，3.函数

`类型转换问题`

通常只有相同类型的数据在一起运算，它的结果才会有意义
比如说：

```js
let a = 10;
let b = 10;
let c = a + b;
// 输出结果当然是c = 20；
// 但是如果是字符串和数字运算
a = "10";
c = a + b;
// 输出结果是c = 1010；
// 这是因为“+”在字符串的运算中，它表示的是两个字符串的连接，
// 此时会自动的触发字符转换（当运算符两边的类型不一致时，就会发生类型转换）

// 并不是只有运算时会产生类型转换，当进行“==”匹配时，也会发生类型转换
// 例如
c = a == b;
// 输出的是c = true，此时的a是一个字符串，而b是一个数值，不应该是相等的结果
// 这是因为“==”属于非严格匹配，只检查值，而不检查类型
// 所以在进行匹配时，一定不要使用“==”，而应该使用“===”匹配，它属于严格匹配，既检查值也检查类型（建议平时用这个）
c = a === b;
// 这时c = false；
```

## 二、js 中的函数提升与重写问题

在 js 中有一个很有意思的现象：不管你的函数创建在哪块，只要是创建了，然后你在代码区的任何位置都能调用到它，它默认的将一个函数的位置给提升到了代码区的最顶层，也就是说，哪怕是你的调用写在函数声明之前都是没有问题的，这就是 js 中的函数提升问题。当然变量和常量是不存在这种问题的。

```js
console.log(getName("an"));
// 声明一个函数
function getName(name) {
  return "Welcome to" + name;
}
// 可以看到的是，当前的调用是在声明前的，但是代码是可以执行的
```

而且很奇葩的是你可以取将这个函数进行重写，也就是说，你在上边声明的函数，原函数可以被后来的函数重写覆盖掉。

```js
function getName(name) {
  return "Welcome to" + name;
}
function getName(name) {
  return "欢迎 " + name;
}
console.log(getName("an"));
// 此时对getName()进行调用，此时的结果就是： “欢迎 an”
```

所以在 js 函数中就存在两种问题：

- `函数声明提升`

- `函数重写`

解决方案：

解决函数声明提升问题：在 js 中变量是不可以在它被声明之前引用的，所以，我们可以使用匿名函数的方式去让它不在被提升。

```js
// 使用匿名函数/匿名表达式的方式。解决函数声明提升问题
console.log(myName("an"));
// 无法被调用
let myName = function (name) {
  return "My name is " + name;
};
console.log(myName("an"));
```

解决函数重写问题：在 js 中常量是不能够被重新定义的，所以，我们可以将函数当成一个值赋给一个常量。同样是利用匿名函数的方式。

```js
const myName = function (name) {
  return "My name is " + name;
};
myName = function (name) {
  return "My name is " + name;
};
console.log(myName("an"));
// 这时候就会发现报错信息，因为常量不允许被重新定义
```

## 三、函数参数和返回值

js 函数在 ES6 之后是支持函数设置默认参数的。在一个函数中，如果传递的参数非常多的话，就会显得很长，这时候，可以使用`...`rest 归并参数方法，来简化函数参数声明。

```js
let sum = function (a, b, c, d) {
  return a + b + c + d;
};
sum = function (...arr) {
  // return a + b + c + d;
  // arr是一个数组类型的数据
  console.log(arr);
  // 参数求和
  return arr.reduce(function (p, c) {
    return p + c;
  });
};
```

同样的，一个函数的参数很多的话，调用它的话，传参也会很麻烦，也可以使用`...`扩展参数方法，来简化函数的调用参数。

```js
let arr = [1, 2, 3, 4];
console.log(sum(...arr));
// 可以看到的是,数组直接被转换成了单个元素传参
```

函数的返回值都是单值返回的，如果想要返回多个值可以将结果封装到数组或者对象中

```js
let Arr = function () {
  return [1, 2, 3, 4];
};
console.log(Arr());

console.table("-------------------");

//   返回值是对象的
Arr = function () {
  return {
    name: "mimi",
    age: 18,
    gender: "男",
  };
};
```

## 四、四种高阶函数

高阶函数:使用函数作为参数或将函数作为返回值的函数

1.回调函数

```js
// 给文档对象添加一个点击事件，使用函数作为参数
document.addEventListener("click", function () {
  alert("Hello world!");
});
```

2.偏函数：将函数中的必须参数先固定下来,其他参数交给子函数去处理

函数的闭包实现偏函数,这就有点像是定义了一个含有参数的类,里边写了一个含有参数的方法。你想要使用这个方法,你就必须先给这个类传参,然后调用这个函数的时候也得传参.

```js
let sum = function (a, b) {
  return function (c, d) {
    return a + b + c + d;
  };
};

// 调用偏函数
let li = sum(1, 2);
console.log(li(3, 4));
```

3.柯里化：每个函数只传递一个参数,最后一个函数对于参数进行处理，相当于是细致化的一个偏函数

```js
// 柯里化示例
sum = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
};
// 调用这个函数
let ke = sum(1)(2)(3)(4);
console.log(ke);
```

4.纯函数:完全独立于调用上下文,返回值只受到参数影响

```js
// 纯函数示例
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
```

## 五、箭头函数

箭头函数用来简化“匿名函数”的声明，箭头函数的结构：(参数) => {...};
一个简单的箭头函数示例：

```js
let sum = function (a, b) {
  return a + b;
};
//   改写成箭头函数
sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));
```

箭头函数的特点：  
1.如果函数体只有一条语句，可以不写 return；
例如:`sum = (a, b) => a + b;`  
2.如果函数只有一个参数，小括号也不用写；
例如：`sum = a => a + 1;`  
3.如果没有参数，小括号不能省略
例如：`sum = () => 1 + 2;`  
4.箭头函数没有原型属性，不能当构造函数用  
5.箭头函数中的 This 始终与上下文绑定
