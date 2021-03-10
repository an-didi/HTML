# JSON 基础

## 1. JSON 是什么

- JSON: JavaScript Object Notation(JS 对象表示法)
- JSON 独立于任何编程语言, 几乎所有编程语言都提供了访问 JSON 数据的 API 接口
- JSON 是一种语法,用来序列化其它语言创建的数据类型
- JSON 仅支持 6 种数据类型:对象,数组,数值,字符串,布尔值,null
- JSON 只是借用了 JS 中的一些数据表示语法,与 JS 并无关系

## 2. JSON 数据类型

| 序号 | 类型   | 描述                  |
| ---- | ------ | --------------------- |
| 1    | 简单值 | 数值,字符串,布尔,null |
| 1    | 复合值 | 对象,数组             |

> 注意: 不支持`undefined`(因为除 JS 外,其它语言中没有这个东西)

## 3. JS 解析 JSON 的 API

| 序号 | 方法               | 描述                            |
| ---- | ------------------ | ------------------------------- |
| 1    | `JSON.stringify()` | 将 JS 对象,序列化为 JSON 字符串 |
| 2    | `JSON.parse()`     | 将 JSON 字符串,解析为 JS 对象   |