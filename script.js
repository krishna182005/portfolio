function toggleDetails() {
    const details = document.querySelector('.details');
    const btn = document.querySelector('.show-more-btn');

    details.classList.toggle('show'); // Toggle the visibility class

    if (details.classList.contains('show')) {
        btn.textContent = 'Show less';
    } else {
        btn.textContent = 'Show more';
    }
}
