<?php

// 在服务器端开启跨域请求
// header('Access-Control-Allow-Origin: http://hello.io');
// *： 表示任何来源都可以
header('Access-Control-Allow-Origin: *');

echo 'CROS:跨域请求成功';