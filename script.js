const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const checkin = String(data.get('checkin') || '').trim();
    const guests = String(data.get('guests') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = encodeURIComponent('Hotel inquiry from ' + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCheck-in: ${checkin || 'Not specified'}\nGuests: ${guests}\n\nMessage:\n${message}`
    );

    const status = contactForm.querySelector('.form-message');
    if (status) status.textContent = 'Your email app will open with the inquiry prepared. Please review and send it.';

    // Replace this sample address with your hotel's real email.
    window.location.href = `mailto:hello@yourhotel.com?subject=${subject}&body=${body}`;
  });
}
