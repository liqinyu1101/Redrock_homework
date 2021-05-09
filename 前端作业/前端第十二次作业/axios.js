//axios有两种基本调用方式，一种为axios(config),一种为axios.method(url,data,config)
//axios(config)是Axios类中的一种方法，而axios.method则在Axios原型对象上
//先构建一个Axios类
class Axios {
    constructor() {

    }
    //axios返回的是一个promise
    request(config) {
        return new Promise((resolve) => {

            const {
                url = '', param = {}, method = 'get'
            } = config
            const xhr = new XMLHttpRequest;
            xhr.open(method, url, true)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status <= 300) {
                        resolve(JSON.parse(xhr.responseText))
                    }
                }
            }
            //axios可以直接传参，无需转化成json形式，所以应在内部完成转化
            xhr.send(JSON.stringify(param))
        })
    }
}


//给Axios原型添加方法
let methodArr = ['get', 'post']
methodArr.forEach(method => {
    Axios.prototype[method] = function () {
        return this.request({
            method,
            ...arguments[0]
        })
    }
})
//这些方法存在Axios类的原型上，而不是axios(axios实际是request函数)，所以我们还需要一个函数来
//给axios添加属性
//用函数把request提取出来
function extend(a, b, context) {
    for (let key in b) {
        if (b.hasOwnProperty(key)) {
            a[key] = b[key].bind(context)
        }
    }
}

function CreateAxiosFn() {
    let axios = new Axios;
    let req = axios.request.bind(axios);
    extend(req, Axios.prototype, axios)
    return req;
}
let axios = CreateAxiosFn()


export {
    axios
};