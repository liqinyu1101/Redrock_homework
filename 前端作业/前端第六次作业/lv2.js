function ajax(options) {
    //默认值
    var defaults = {
        type:'get',
        url:'',
        data:{},
        header:{
            'Content-Type':'application/x-www-form-urlenconded'
        },
        async:true,
        success:function () {},
        error:function () {}
    };
    //如果传参，覆盖默认值
    Object.assign(defaults,options);
    
    //使用ajax
    const xhr = new XMLHttpRequest();
    
    //根据method的不同设置不同的url
    var param = '';
    for(var attr in defaults.data) {
        param += attr + '=' +defaults.data[attr] + '&';
    }
    param = param.substr(0,param.length-1);

    if(defaults.type == 'get') {
        defaults.url = defaults.url+'?'+param;
    }
    xhr.open(defaults.type,defaults.url);
    
    //根据method不同设置不同的请求参数
    if(defaults.type == 'post') {
        var Content_Type = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type', Content_Type);
        if(Content_Type == 'application/x-www-form-urlenconded'){
            xhr.send(param);
        }else {
            xhr.send(JSON.stringify(defaults.data))
        }
    }else {
        xhr.send();
    }

    xhr.onload = function () {
        var contentType = xhr.getResponseHeader('Content-Type');       
        var responseText = xhr.responseText;
        if (contentType.includes('application/json')) {    
            responseText = JSON.parse(responseText)
        }
        if (xhr.status == 200) {
            defaults.success(responseText, xhr);
        }else {
            defaults.error(responseText, xhr); 
        }
    }   
}


ajax({
    url:'http://musicapi.leanapp.cn/personalized',
    type:'post',
    data:{
        limit:30
    },
    success:function(data){
        console.log(data);
    },
    error:function(data){
        console.log('There is something wrong'+data);
    }
})