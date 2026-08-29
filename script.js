// Sebar bintang secara acak di langit
const starsEl = document.getElementById('stars');
for (let i = 0; i < 70; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 70 + 'vh';
  s.style.animationDelay = (Math.random() * 4) + 's';
  starsEl.appendChild(s);
}

// Buat gelembung yang naik perlahan dari bawah layar
for (let i = 0; i < 18; i++) {
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = 4 + Math.random() * 10;
  b.style.width = size + 'px';
  b.style.height = size + 'px';
  b.style.left = Math.random() * 100 + 'vw';
  b.style.animationDuration = (6 + Math.random() * 8) + 's';
  b.style.animationDelay = (Math.random() * 10) + 's';
  document.body.appendChild(b);
}

// Interaksi buka/tutup botol pesan
const bottleWrap = document.getElementById('bottleWrap');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function openLetter() {
  bottleWrap.classList.add('open');
  setTimeout(() => overlay.classList.add('show'), 350);
}

function closeLetter() {
  overlay.classList.remove('show');
  setTimeout(() => bottleWrap.classList.remove('open'), 300);
}

bottleWrap.addEventListener('click', openLetter);
bottleWrap.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openLetter();
  }
});
closeBtn.addEventListener('click', closeLetter);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLetter();
});