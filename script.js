function toggleDetails() {
    const details = document.querySelector('.details');
    const btn = document.querySelector('.show-more-btn');

    // Toggle the visibility of the details section
    details.classList.toggle('show');

    // Change button text based on visibility of details
    if (details.classList.contains('show')) {
        btn.textContent = 'Show less';
    } else {
        btn.textContent = 'Show more';
    }
}
