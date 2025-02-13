function toggleDetails() {
    const details = document.querySelector('.details');
    const btn = document.querySelector('.show-more-btn');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        btn.textContent = 'Show less';
    } else {
        details.style.display = 'none';
        btn.textContent = 'Show more';
    }
}
