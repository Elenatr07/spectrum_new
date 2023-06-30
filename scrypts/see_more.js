//Load more 12 + 12
function showless(){
    let btnText = document.getElementById("load_btn");
    let els = document.getElementsByClassName("_hidden");
   var arrow = document.getElementById("load_btn");
   
   
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        btnText.innerHTML = "See Less";
        el.style.display = 'block';
        arrow.classList.toggle('tool');
        
      } else {
        btnText.innerHTML = "See More";
        el.style.display = "none";
      }
   //console.log(els);
  }
  }