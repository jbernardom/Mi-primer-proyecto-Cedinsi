var toggleButton = document.getElementById('toggleButton');
var menu = document.getElementById("menu");

toggleButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});