<?php 

// 以二维数组模拟数据表信息
$users = [
      ['id'=>1, 'name'=>'小花','email'=>'xh@xh.com','password' =>  md5('xh123456')],
      ['id'=>2, 'name'=>'小草','email'=>'xc@xc.com','password' =>  md5('xc123456')],
      ['id'=>3, 'name'=>'大树','email'=>'ds@ds.com','password' =>  md5('ds123456')],
];

// 查询条件
$id = $_GET['id'];

// 在id组成的数组中查询是否存在指定的id,并返回对应的键名
$key = array_search($id,array_column($users,'id'));

// 根据键名返回指定的用户信息
echo json_encode($users[$key]);