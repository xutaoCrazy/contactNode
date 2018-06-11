#### 连接node服务器问题
1.在搭建服务器时遇到的问题

2.ajax请求返回状态为200但还是进入error事件

3.出错原因：dataType:"json",而后台返回的数据不符合json规范。

4.解决方法：先将dataType设置为text，这样就可以进入success方法了，查看data数据究竟是什么。

5.我的data为：｛"success":success｝，可以看出第二个success没有引号包裹，不符合json规范，故而不能转换为json对象。

6.之后的解决方法就很好办了。一种是修改后台返回值，二种是直接解析text返回的值。
####   搭建node服务器
1.创建一个文件夹 app

2. 在APP下 npm init 创建package.json文件

3. 安装 express
```
npm install express --save
```

4.创建一个 index.html 文件，做一个ajax 的get请求看看，

$.ajax({

    type:'get',

    url:'http://localhost:3000/123',

    success:function(data){

        console.log(data);

    },

    error:function(){

        console.log('error');

    }

})
