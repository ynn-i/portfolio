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
