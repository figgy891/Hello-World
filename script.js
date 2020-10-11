window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("img");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);


let changeColor = (color) => {
    console.log(color);
  
    let theH1 = document.getElementById('myH1');
  
    if(color == 'white'){
  
      let myColors = ['red', 'green', 'blue', 'yellow'];
  
      let maxSeconds = 10;
      let currentSeconds = 0;
  
      let theInterval = setInterval(() => {
        
  
        let randomColorSelection = myColors[Math.floor(Math.random()*myColors.length)]
        console.log(randomColorSelection);
        theH1.style.color = randomColorSelection;
      }, 2000)
  
  
    }
    else {
      
      console.log(theH1);
      theH1.style.color = color;
    }
}