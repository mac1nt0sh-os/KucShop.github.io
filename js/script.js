// Обработчики событий
document.querySelectorAll('.uc-card').forEach(card => {
    card.addEventListener('click', function() {
        const uc = this.getAttribute('data-uc');
        const price = this.getAttribute('data-price');
        showPaymentModal(uc, price);
    });
});

// Переключение темы
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}