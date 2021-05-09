import {
    axios
} from './axios.js';
axios.get({
    url: 'http://musicapi.leanapp.cn/personalized?limit=30'
}).then(res => {
    console.log(res);
})