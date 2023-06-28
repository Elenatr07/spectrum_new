//Load more 12 + 12
function showless(){
    let btnText = document.getElementById("load_btn");
    let els = document.getElementsByClassName("_hidden");
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        btnText.innerHTML = "See less";
        el.style.display = 'block';
        
      } else {
        btnText.innerHTML = "See more";
        el.style.display = "none";
      }
   //console.log(els);
  }
  }