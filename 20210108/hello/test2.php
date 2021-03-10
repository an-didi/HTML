<?php 

// print_r($_POST);


// 使用二维数组模拟用户数据表信息
$users = [
    ['id'=>1, 'name'=>'小花','email'=>'xh@xh.com','password' =>  md5('xh123456')],
    ['id'=>2, 'name'=>'小草','email'=>'xc@xc.com','password' =>  md5('xc123456')],
    ['id'=>3, 'name'=>'大树','email'=>'ds@ds.com','password' =>  md5('ds123456')],
];

// 将通过post获取的数据保存到临时变量中
$email = $_POST['email'];
$password = md5($_POST['password']);


// 使用数组过滤器查询是否存在指定的用户并返回结果
$res = array_filter($users,function($user) use ($email,$password){
    return $user['email'] === $email && $user['password'] === $password;
});

// 将结果做为请求响应返回到前端 
echo count($res) === 1 ? '验证成功!' : '验证失败!';