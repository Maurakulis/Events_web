document.querySelector('#navBar>input')
.addEventListener('click', e => {
console.log(e);
const button = document.createElement('input')
button.setAttribute('name', 'emailas')
button.setAttribute('id', 'emailas')
button.setAttribute('placeholder', 'Your e-mail...')
button.style.position = 'absolute';
// button.style.top = `${e.pageY}px`;
// button.style.left = `${e.pageX}px`;
// button.style.transform =`translate(-50%,-50%)`;
document.body.appendChild(button)
.addEventListener('mousemove', e=> {
button.remove()
  })
})