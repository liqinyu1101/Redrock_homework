
const btn = document.querySelector('.btn');
const status = document.querySelector('.status');

const xhr = new XMLHttpRequest();
xhr.open('get', 'http://musicapi.leanapp.cn/personalized?limit=30',true);
let res;

xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) { 
      status.innerText = 'loading......';
  }
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      res = JSON.parse(xhr.responseText);
      console.log(res);
      console.log('请求成功');
      status.innerText = '网抑云时间到';
    } else {
      console.log('请求失败');
    }
  }
};

xhr.send();

const handleRes = ()=>{
    const container = document.querySelector('.container');
    const { result } = res;
    localStorage.setItem('res',JSON.stringify(res));
    console.log(result)
    let html = '';
    result.forEach(item =>{
    html+=`
    <div>
    <img src = "${item.picUrl}" class = "img"/>
    <div class = "text">${item.name}</div>
    </div>
    `;
    });
container.innerHTML = html;
btn.value = '12:00';
};
btn.addEventListener('click',handleRes);