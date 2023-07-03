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
  function how_it_works(){
    let btnText = document.getElementById("load_btn_how");
    let els = document.getElementsByClassName("step");
   var arrow = document.getElementById("load_btn_how");
   
   arrow.classList.toggle('up');
   
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        el.style.display = 'block';
        
        
      } else {
       el.style.display = "none";
       
      }
   //console.log(els);
  }
  }