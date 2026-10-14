window.addEventListener('load', () => {
  document.body.classList.remove('container');

  const openingScreen = document.getElementById('opening-screen');
  const startButton = document.getElementById('start-btn');

  const loveRain = document.createElement('div');
  loveRain.className = 'love-rain';
  document.body.appendChild(loveRain);

  const imageModal = document.createElement('div');
  imageModal.className = 'image-modal';
  imageModal.setAttribute('aria-hidden', 'true');
  imageModal.innerHTML = `
    <div class="image-modal__backdrop" data-close="true"></div>
    <div class="image-modal__content">
      <button class="image-modal__close" type="button" aria-label="Tutup gambar">×</button>
      <img src="" alt="Foto diperbesar" />
    </div>
  `;
  document.body.appendChild(imageModal);

  const modalImage = imageModal.querySelector('img');
  const closeModal = () => {
    imageModal.classList.remove('active');
    imageModal.setAttribute('aria-hidden', 'true');
  };

  imageModal.querySelector('[data-close="true"]').addEventListener('click', closeModal);
  imageModal.querySelector('.image-modal__close').addEventListener('click', closeModal);

  document.querySelectorAll('.flower__photo img').forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      imageModal.classList.add('active');
      imageModal.setAttribute('aria-hidden', 'false');
    });
  });

  const createFloatingLove = () => {
    const heart = document.createElement('span');
    heart.className = 'love-item';
    heart.textContent = ['❤', '♡', '♥', '💗'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (4 + Math.random() * 5) + 's';
    heart.style.animationDelay = (Math.random() * 1.5) + 's';
    heart.style.fontSize = (16 + Math.random() * 22) + 'px';
    heart.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    loveRain.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);
  };

  const createPetal = () => {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (4 + Math.random() * 5) + 's';
    petal.style.animationDelay = (Math.random() * 2) + 's';
    const hue = Math.floor(320 + Math.random() * 60);
    petal.style.background = `linear-gradient(135deg, hsl(${hue}, 90%, 75%), hsl(${hue + 18}, 90%, 62%))`;
    petal.style.transform = `scale(${0.6 + Math.random() * 0.9}) rotate(${Math.random() * 90}deg)`;
    loveRain.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 9000);
  };

  const startAnimation = () => {
    for (let i = 0; i < 18; i++) {
      setTimeout(createFloatingLove, i * 180);
    }

    for (let i = 0; i < 26; i++) {
      setTimeout(createPetal, i * 90);
    }
  };

  if (startButton && openingScreen) {
    startButton.addEventListener('click', () => {
      openingScreen.classList.add('is-hidden');
      document.body.classList.add('page-started');
      document.body.classList.remove('intro-active');
      startAnimation();
    });
  }
});