<?php

// jsonp 不需要授权给前端
// 只需要返回一个使用json作为参数的函数调用语句
// 将前端需要的数据以json格式放到函数的参数中

// 必须要知道前端js需要调用的js名称

$jsonp = $_GET['jsonp'];

// 服务器中需要返回的数据

$data = '{ "name": "小花", "email": "xh@qq.com" }';

// 对返回的函数进行拼接
echo $jsonp . '(' .$data .')';