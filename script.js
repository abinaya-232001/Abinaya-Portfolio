<script>
    // Toggle dark mode on button click
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Change the moon icon to sun when dark mode is activated
        const moonIcon = document.querySelector('#dark-mode-toggle i');
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.classList.remove('fa-moon');
            moonIcon.classList.add('fa-sun');
        } else {
            moonIcon.classList.remove('fa-sun');
            moonIcon.classList.add('fa-moon');
        }
    });
</script>
