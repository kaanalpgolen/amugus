window.addEventListener('load', function() {
    var audio = document.getElementById('madagascarpengu');
    if (audio) {
        audio.play().catch(function(error) {
            console.log('Oynatma hatası:', error);
        });
    }
});

