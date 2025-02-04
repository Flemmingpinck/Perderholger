document.getElementById('per').addEventListener('mouseover', function() {
    this.src = 'per_lachend.jpg'; // Bild ändert sich zu lachend
});

document.getElementById('per').addEventListener('mouseout', function() {
    this.src = 'per_taerisch.jpg'; // Bild zurücksetzen, wenn man die Maus wegzieht
});
