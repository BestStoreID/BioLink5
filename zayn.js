document.addEventListener('DOMContentLoaded', () => {
  const userName = '𝐁𝐄𝐒𝐓 𝐒𝐓𝐎𝐑𝐄';

  const socialLinks = [
    { href: "𝑮𝑪 𝑨𝑳𝑳𝑮𝑨𝑴𝑬", url: "https://chat.whatsapp.com/JAg3A1Kk5GhEPWzKlyPK5N", icon: "fa-whatsapp" }, // Tautan WhatsApp
    { href: "𝑮𝑪 𝑩𝑳𝑶𝑿𝑭𝑹𝑼𝑰𝑻", url: "https://chat.whatsapp.com/F1Xslc8blZ1Cp3TyKListV", icon: "fa-whatsapp" }, // Tautan WhatsApp
  ];

  // Set the username in the header
  document.querySelector('header h1').textContent = userName;

  // Generate the social links list
  const ul = document.querySelector('main ul');
  ul.innerHTML = socialLinks.map(link => `
    <li>
      <a href="${link.href}" target="_blank" rel="noreferrer noopener">
        <i class="${link.icon}"></i>
        ${link.name}
      </a>
    </li>
  `).join('');

  // Initialize Vanta.js
  VANTA.BIRDS({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    color2: 0xff00f0,
    wingSpan: 40.0,
    separation: 100.0,
    alignment: 77.0,
    cohesion: 5.0,
    quantity: 2.0,
  });

  // Fade in the main content
  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)';
  }, 1000);
});
