const dropdownButton = document.querySelector('.works_list_m');
const worksListItems = document.querySelectorAll('.works_list li');

dropdownButton.addEventListener('click', function () {
    dropdownButton.classList.toggle('active');

    worksListItems.forEach((item) => {
        if (dropdownButton.classList.contains('active')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const worksList = document.querySelector('.works_list');
    const headerOffset = 80;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    worksList.classList.remove('sticky-active');
                } else {
                    worksList.classList.add('sticky-active');
                }
            });
        },
        {
            root: null,
            rootMargin: `-${headerOffset}px 0px 0px 0px`,
            threshold: 0,
        }
    );
    observer.observe(worksList);
});
