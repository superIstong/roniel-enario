const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.toggle('d-none');
});