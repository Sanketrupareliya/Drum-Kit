document.addEventListener('keydown', function(e) {
    var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.toggle('playing');
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
  });

function end(e){
    console.log(e);
    if(e.propertyName!='box-shadow') return;
    this.classList.remove('playing');
}

const keys=document.querySelectorAll(".In");
keys.forEach(key => key.addEventListener('transitionend',end));
console.log(keys);