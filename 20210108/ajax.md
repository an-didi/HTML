# Ajax 异步请求

> 特别提示: 异步请求不要使用`live server`插件,必须创建一个本地服务器环境

## 1. 同步与异步

以前端请求,后端响应为例

- 同步: 前端发请求, 必须等到后端响应完成,才允许发送另一个请求
- 异步: 前端发请求后不等待后端响应结果继续执行,后端响应完成通过事件通知前端处理

---

## 2. `XMLHttpRequest` 对象

`XMLHttpRequest`是浏览器对象,而非 JS 内置对象

### 2.1 xhr 请求步骤

1. 创建 xhr 对象: `const xhr = new XMLHttpRequest()`
2. 配置 xhr 参数: `xhr.open(type, url)`
3. 处理 xhr 响应: `xhr.onload = (...) => {...}`
4. 发送 xhr 请求: `xhr.send(...)`

### 2.2. xhr 对象常用属性

| 序号 | 方法           | 描述         |
| ---- | -------------- | ------------ |
| 1    | `responseType` | 设置响应类型 |
| 2    | `response`     | 响应正文     |

### 2.3 xhr 对象常用方法

| 序号 | 方法              | 描述         |
| ---- | ----------------- | ------------ |
| 1    | `open(type,url)`  | 配置请求参数 |
| 2    | `send(data/null)` | 发送请求     |

### 2.4. xhr 对象常用事件

| 序号 | 事件      | 描述     |
| ---- | --------- | -------- |
| 1    | `load()`  | 请求成功 |
| 2    | `error()` | 请求失败 |

<https://developer.mozilla.org/zh-CN/docs/Web/API/xmlhttprequest>

---

## 3. `FormData` 对象

`FormData`是表单数据构造器

| 序号 | 方法                 | 描述     |
| ---- | -------------------- | -------- |
| 1    | `append(name,value)` | 请求成功 |
| 2    | `delete(name)`       | 请求失败 |

<https://developer.mozilla.org/zh-CN/docs/Web/API/FormData>

---

## 4. `get / post` 区别

- get 是 url 传参,post 是`request body`请求体传参
- get 回退无影响, post 回退会重复提交
- get 生成的 url 可做书签,post 不可以
- get 只能对 url 进行编码, post 支持多种编码
- get 请求参数会保留在历史记录中, post 参数不保留
- get 参数长度受限,post 无限制
- get 只接受 ascii 码字符,post 无限制
- get,post 底层实现是一致的,都是基于 http 协议
- get 也可以带上 request body, post 也可以带上 url 参数
- get 产生一个 tcp 数据包,post 产生二个 tcp 数据包
- get 产生一个请求, post 产生二个请求
- get 请求,浏览器将 header,data 一起发出,服务器响应 200 成功
- post 请求,浏览器先发出 header,得到响应 100 continue,再发出 data,得到响应 200
- 并非所有浏览器的 post 都产生二次 http 请求,firefox 就只产生一次

---

## 5. 跨域

- CORS: 跨域资源共享
- 跨域请求可以是 get,也可以是 post,只不过 get 居多
- cors-post 时,需要在服务器端进行头部设置
- jsonp 只能是 get
