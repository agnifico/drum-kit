


for (i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    highlight(this.innerHTML);
  });
}


document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  highlight(event.key);
})

function makeSound(key) {
  sounds = new Map([
    ["w", 'sounds/tom-1.mp3'],
    ["a", 'sounds/tom-2.mp3'],
    ["s", 'sounds/tom-3.mp3'],
    ["d", 'sounds/tom-4.mp3'],
    ["j", 'sounds/snare.mp3'],
    ["k", 'sounds/crash.mp3'],
    ["l", 'sounds/kick-bass.mp3']
  ]);
  var audio = new Audio(sounds.get(key));
  audio.play();
}

function highlight(key) {
  document.querySelector('.' + key).classList.add('pressed');
  setTimeout(function () {
    document.querySelector('.' + key).classList.remove('pressed')
  },100)
}
