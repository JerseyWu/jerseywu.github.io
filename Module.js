// myModule.js
(function() {
    // 定义模块对象
    const cc = {};

    // 添加一个post请求
    cc.post = function() {
        console.log('post');
    };

    // 添加一个get请求
    MyModule.get = function() {
        console.log('get');
    };

    // 将模块挂载到全局window对象上，方便外部访问
    window.cc = cc;
})();
