import {data} from './data.js';
let qTrailer=document.querySelector('#trailer');
let fTrailer=()=>{
    data.forEach((e,i)=>{
        let timeOut=setTimeout(()=>{
            qTrailer.style.backgroundImage = `url(${e.image_src})`;
        },i*2000);
        qTrailer.addEventListener('click',()=>clearTimeout(timeOut));
})};    

fTrailer();
qTrailer.addEventListener('click',fTrailer);