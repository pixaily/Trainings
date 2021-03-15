function playSound(e) {
    var keyCode = e.keyCode;
    const keyEl = document.querySelector('.key[data-key="' + keyCode + '"]');
    const audio = document.querySelector('audio[data-key="' + keyCode + '"');

    if(!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    keyEl.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

var allKeys = document.querySelectorAll('.key');

allKeys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
