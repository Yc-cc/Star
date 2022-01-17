module.exports={
    //开启lint的检查机制
    lintOnSave:true,
    //配置好项目页面
    pages:{
        index:{
            template:"public/index.html",
            entry:"src/index.js"
        },
        
    },
    //配置服务器选项
    devServer:{
        //端口号
        port:5140,
        //使用默认的浏览器打开
        open:true,
        // 配置代理 -- 实际上在执行请求的时候，接口访问本地服务器，然后服务器去执行接口访问，然后把访问回来的接口返给前端
        proxy: {
            // 设置代理的关键字--在请求的地址中有这样的字符，如果有字符则执行代理
            // http://localhost:9000/apis/user/validate/code?phone=13611660001
            // 因为地址中包含了/apis字段，所以会被代理
            // 把 http://localhost:9000 => 服务器接收到请求后，使用http模块发送到http://www.shuiyue.info:16800
            // /apis/user/validate/code 地址，在发送请求的时候，使用pathRewrite 规则对地址进行重写：/user/validate/code
            // 所以本地的服务器会发送一个请求到远程服务器上去：http://www.shuiyue.info:16800/user/validate/code
            '/apis': {
                // 设置代理的目标
                // target: 'http://www.shuiyue.info:16800',
                target: 'http://localhost:4000',
                // 需要对地址中的多余字段"/apis"去掉
                pathRewrite: {'/apis': ''}
            }
        }
    },
    //百度地图
    configureWebpack:{externals: { "BMap": "BMap" }}
}