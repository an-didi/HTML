# html 中的文本链接锚点与图片

## 1. 标题标签与段落标签

- 标题标签

  在 html 中标题是从\<h1>\~\<h6>等标签进行定义的。其中\<h1>定义最大的标题，\<h6>定义最小的标题。不过在平常的使用中，用的最多的是\<h1>\~\<h3>，\<h4>\~\<h6>几乎用不到。

- 段落标签

  在 html 中段落标签可以把 html 文档分割为若干个段落。段落是通过\<p>标签来定义的。

- 练习

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>标题和段落</title>
  </head>
  <body>
    <h1>一号标题</h1>
    <p>这是一个段落</p>
    <h2>二号标题</h2>
    <h3>三号标题</h3>
    <h4>四号标题</h4>
    <h5>五号标题</h5>
    <h6>六号标题</h6>
  </body>
</html>
```

## 2. 链接与锚点

- 链接

  在 html 中链接标签是用\<a>进行定义的。\<a>标签是互联网的灵魂，\<a>标签的两个常用的属性是 href 和 target， 其中 href 属性是超链接，指向网页的地址，一般形式是“ href="https://xxx.com" ”；target 属性是哪一个窗口来进行打开指定的路径，一般有四个内置的值分别是：
  \_blank: 在新窗口打开；
  \_self: 在当前窗口打开；
  \_parent: 在父级窗口打开；
  \_top: 在最顶级窗口打开。
  一般默认值为 \_self 在当前窗口打开。
  还可以使用\<iframe>标签实现画中画页面。

- 锚点

  锚点操作是用\<a>标签和\<div>标签(通用容器标签，可以放任何类型的元素)来实现的。通过锚点操作，可以实现当前页面任意位置的跳转，实现单页面路由。

- 练习

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>链接与锚点</title>
  </head>
  <body style="display: grid">
    <!-- 链接 -->
    <a href="https://www.php.cn/" target="_self">php中文网</a>
    <a href="https://www.php.cn/" target="_blank">php中文网</a>
    <!-- 页面内嵌 -->
    <a href="https://www.baidu.com/" target="baidu">小度</a>
    <iframe
      srcdoc="<em>点击上面的“小度”</em>"
      name="baidu"
      frameborder="0"
      width="400"
      height="400"
    ></iframe>
    <!-- 锚点 -->
    <a href="#footer">跳转到底部</a>
    <div id="footer" style="margin-top: 1000px">这是底部</div>
    <a href="#">回到顶部</a>
  </body>
</html>
```

## 3. 图片

在 html 中图片标签是用\<img>定义的。图片是一个网页的灵魂所在。不过图片一般是不单独使用的，一般都是链接配合使用的。再者图片的调节大小的时候，只需要调节宽度或者高度中的一个就行。
练习

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>图片</title>
  </head>
  <body>
    <a href="https://www.php.cn/map/dugu.html" target="_blank">
      <img
        src="https://img.php.cn/upload/course/000/000/001/5d1c6ddbecdb1707.jpg"
        alt="独孤九剑"
        title="独孤九剑"
      />
    </a>

    <!-- <img
      src="https://img.php.cn/upload/course/000/000/001/5d1c6ddbecdb1707.jpg"
      alt="独孤九剑"
    /> -->
  </body>
</html>
```
