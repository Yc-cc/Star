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
            '/apis': {
                // 设置代理的目标
                target: 'http://localhost:4000',
                changeOrigin: true,
                // 需要对地址中的多余字段"/apis"去掉
                pathRewrite: {'/apis': ''}
            },
            '/phoneaddress': {
              target: 'http://apis.juhe.cn/mobile/get',
              changeOrigin: true, //跨域
              pathRewrite: {'/phoneaddress':''}
            }
        }
    },
    //百度地图
    configureWebpack:{externals: { "BMap": "BMap" }}
}