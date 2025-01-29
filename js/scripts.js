// Dropdown Interaction
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    const chevron = button.querySelector('.fa-chevron-down');
    
    // Toggle dropdown
    dropdownContent.classList.toggle('active');
    
    // Rotate chevron
    chevron.style.transform = dropdownContent.classList.contains('active') 
      ? 'rotate(180deg)' 
      : 'rotate(0deg)';
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Speed Test Simulation (AtPayis)
document.getElementById('startTest')?.addEventListener('click', () => {
  const speedMeter = document.querySelector('.speed-meter');
  speedMeter.style.width = '0%';
  
  // Simulate speed test
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      alert('Your speed: 85Mbps Download / 40Mbps Upload');
    } else {
      width++;
      speedMeter.style.width = width + '%';
    }
  }, 20);
});