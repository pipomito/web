document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé et prêt.');
    const button = document.getElementById('click-me-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('5/5');
        });
    } else {
        console.log('Le bouton n\'a pas été trouvé.');
    }
});
