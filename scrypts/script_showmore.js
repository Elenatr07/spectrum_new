/*const more = document.querySelectorAll('.button');

window.addEventListener('resize', () => {
    let item;
  if (window.innerWidth <= 768) {
    item = document.querySelector(".list-item:nth-child(3)");
    item.classList.add('_hidden');
  }
  if (window.innerWidth > 768) {
    item = document.querySelector(".list-item:nth-child(1)");
    item.setAttribute('class', item.getAttribute('class').replace(' _hidden', ''));
  }
});

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    let showPerClick = 3;

    let hidden = this.parentNode.querySelectorAll('li._hidden');
    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";
      hidden[i].classList.remove('_hidden');
      
    } 
  });
  
}*/
function showless(){
  let btnText = document.getElementById("btn");
  let els = document.getElementsByClassName("list-item _hidden");
  
  for (var i = 0, el; el = els[i]; i++){
    if (getComputedStyle(el).display == 'none') {
      btnText.innerHTML = "Show less";
      el.style.display = 'block';
      
    } else {
      btnText.innerHTML = "Show more";
      el.style.display = "none";
    }
 //console.log(els);
}
}