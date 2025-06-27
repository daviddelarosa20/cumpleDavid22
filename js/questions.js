document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-invitation');
    const divToToggle = document.getElementById('divToToggle');
    const bgMusic = document.getElementById('bg-music');

    openBtn.addEventListener('click', function() {
        // Mostrar contenido
        divToToggle.style.display = 'block';

        // Lanzar confetti
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        // Reproducir música
        bgMusic.play();

        // Ocultar el botón después de abrir
        openBtn.style.display = 'none';
    });
});
