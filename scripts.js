// Newsletter interaction (HTML5 input + button does something, Module 9)
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('newsletter-email');
  const joinBtn = document.getElementById('newsletter-btn');
  const messageEl = document.getElementById('newsletter-message');
  const newsletterSection = document.getElementById('newsletter-section');
  const yearSpan = document.getElementById('year');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (joinBtn && emailInput && messageEl && newsletterSection) {
    joinBtn.addEventListener('click', function () {
      const value = emailInput.value.trim();

      if (value === '' || !value.includes('@')) {
        messageEl.textContent = 'Please enter a valid email address.';
        messageEl.style.color = 'crimson';
        newsletterSection.classList.remove('highlighted');
      } else {
        messageEl.textContent = 'Thank you for joining the ABM circle!';
        messageEl.style.color = 'green';
        newsletterSection.classList.add('highlighted');
      }
    });
  }
});
