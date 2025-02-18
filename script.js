function toggleDetails() {
    const details = document.querySelector('.details');
    const btn = document.querySelector('.show-more-btn');

    // Toggle the visibility of details
    details.classList.toggle('show');

    // Change button text based on the visibility of details
    if (details.classList.contains('show')) {
        btn.textContent = 'Show less';
    } else {
        btn.textContent = 'Show more';
    }
}
