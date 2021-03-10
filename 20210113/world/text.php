<?php
header('content-type:text/html;charset=utf-8');

// 获取回调名称
$callback = $_GET['jsonp'];
$id = $_GET['id'];

// 模拟接口数据
$users = [
    0=>'{"name":"小红", "email":"xh@php.cn"}',
    1=>'{"name":"小黄", "email":"xh@php.cn"}',
    2=>'{"name":"小蓝", "email":"xl@php.cn"}' 
];

if (array_key_exists(($id), $users)) {
    $user = $users[$id];
}

// echo $user;

// 动态生成handle()的调用
echo $callback . '(' . $user . ')';