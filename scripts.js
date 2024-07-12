document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome-text');
    const text = welcomeText.textContent;
    welcomeText.textContent = '';

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

function showDescription(heading) {
    heading.style.display = 'none'; // Hide the heading temporarily
    const description = heading.nextElementSibling; // Get the description div
    description.style.display = 'block'; // Show the description
}

function hideDescription(heading) {
    heading.style.display = 'block'; // Show the heading again
    const description = heading.nextElementSibling; // Get the description div
    description.style.display = 'none'; // Hide the description
}
