const btn = document.querySelector('.btn');

function searchMusic(){
    let res;
    const box = document.querySelector('.box');
    var boxValue = box.value;
    var keywords = 'keywords='+boxValue;

    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://musicapi.leanapp.cn/search?'+keywords);
    xhr.send()
    xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        res = JSON.parse(xhr.responseText);
        console.log(res);
        const container = document.querySelector('.container');
        const { result } = res;
        const { songs } = result;
        let html = '';
        songs.forEach(item => {
            html+=`
            <div class ="songName">
            ${item.name}
            </div>    
            `;
        });
        container.innerHTML = html;
        var songName = document.getElementsByClassName('songName');
          for(var i = 0;i<songName.length;i++){
          songName[i].style.backgroundColor = i%2==0?'#f9f9f9':'white';
          }
        }
     }
   }
}
btn.addEventListener('click',searchMusic)