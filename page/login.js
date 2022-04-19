const inputs = document.querySelectorAll("input");
const lbl = document.querySelectorAll("label");
const viewpw = document.querySelector('span') 
const iptpw = document.querySelector('#pw')

inputs.forEach((input) => {
  input.addEventListener("focus", (event) => {
    event.target.parentElement.children[0].classList.add("enterInput");
  });

  input.addEventListener("focusout", (event) => {
    //console.log(event.target.value);
    lbl.forEach((item) => {
      (event.target.value == "") && item.classList.remove("enterInput");
    });
  });

});

viewpw.addEventListener('click', (evt)=>{
    (iptpw.type === "password")? (iptpw.type = "text", viewpw.innerText = "ocultar") 
    : ( iptpw.type = "password", viewpw.innerText = "exibir")

})
