// Smooth scroll fallback
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect setup
  const words = ["Frontend Developer", "Artist", "UI/UX Designer", "Creative Thinker"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedText = document.getElementById("typed-text");

  function typeEffect() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);
    typedText.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect();

  // Tab switching functionality
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');

      const target = this.getAttribute('data-target');
      contents.forEach(content => content.classList.remove('active'));
      document.querySelector(`.${target}`).classList.add('active');
    });
  });

});



