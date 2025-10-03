window.addEventListener('load', function() {
    var audio = document.getElementById('myAudio');
    if (audio) {
        audio.play().catch(function(error) {
            console.log('Oynatma hatası:', error);
        });
    }
});
