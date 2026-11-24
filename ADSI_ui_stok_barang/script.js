const dateElement = document.getElementById('current-date');

const today = new Date();

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

dateElement.textContent = today.toLocaleDateString('id-ID', options);