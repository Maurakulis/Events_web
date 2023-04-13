import {data} from './data_about.js';
let qAnonsas=document.querySelector('#anonsas');
let fAnonsai=()=>{
    data.forEach((e,i)=>{
        let timeOut=setTimeout(()=>{
            //
            qAnonsas.style.backgroundImage = `url(${e.image_src})`;
        },i*2000);
        qAnonsas.addEventListener('click',()=>clearTimeout(timeOut));
})};    

fAnonsai();
qAnonsas.addEventListener('click',fAnonsai);