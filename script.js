window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');

    // Function to add hover class
    function addHoverClass() {
        button.classList.add('hover');
    }

    // Add hover class after 3 seconds from page load
    setTimeout(() => {
        addHoverClass();
    }, 1000); // 3000 milliseconds (3 seconds) delay
});