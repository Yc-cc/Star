// 这段代码写在js文件里
export function loadBMap(funcName) {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=uvN6vatvU44OQ0a9yuXdQZxTXODHGuLI&callback=" + funcName;
    document.body.appendChild(script);
}