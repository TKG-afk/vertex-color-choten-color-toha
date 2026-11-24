const presentation = document.querySelector('#presentation');
const frame = document.querySelector('#frame');
const stage = document.querySelector('#stage');
const slides = [...stage.querySelectorAll('.slide')];
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const slideNumber = document.querySelector('#slide-number');
const progress = document.querySelector('#progress');
const fullscreen = document.querySelector('#fullscreen');
const fullscreenLabel = document.querySelector('#fullscreen-label');
const status = document.querySelector('#status');
let current = 0;

function pageLabel(number) {
  return String(number).padStart(2, '0');
}

function readPage() {
  const match = location.hash.match(/^#(\d{1,2})$/);
  const number = match ? Number(match[1]) : 1;
  const index = number >= 1 && number <= slides.length ? number - 1 : 0;

  if (index !== current) {
    slides[current].hidden = true;
    slides[index].hidden = false;
    current = index;
    window.scrollTo(0, 0);
  }

  slideNumber.textContent = `${pageLabel(current + 1)} / ${pageLabel(slides.length)}`;
  progress.setAttribute('aria-valuenow', String(current + 1));
  progress.style.setProperty('--progress', `${(current + 1) / slides.length * 100}%`);
}

function goTo(index) {
  const wrappedIndex = (index + slides.length) % slides.length;
  location.hash = pageLabel(wrappedIndex + 1);
  readPage();
}

function fitStage() {
  presentation.style.setProperty('--scale', frame.clientWidth / 1920);
}

async function toggleFullscreen() {
  status.hidden = true;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    status.textContent = '全画面表示に切り替えられませんでした。Chromeの全画面表示（F11）も利用できます。';
    status.hidden = false;
  }
}

function updateFullscreen() {
  const active = Boolean(document.fullscreenElement);
  const label = active ? '全画面を終了' : '全画面表示';
  fullscreen.setAttribute('aria-pressed', String(active));
  fullscreen.setAttribute('aria-label', label);
  fullscreen.title = `${label}（F）`;
  fullscreenLabel.textContent = active ? label : '全画面';
  fitStage();
}

previous.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));
fullscreen.addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', updateFullscreen);
window.addEventListener('hashchange', readPage);
new ResizeObserver(fitStage).observe(frame);

window.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.target.closest('input, textarea, select, [contenteditable]')) return;
  if (event.key === ' ' && event.target.closest('button, a')) return;

  switch (event.key) {
    case 'ArrowLeft':
    case 'PageUp':
      goTo(current - 1);
      break;
    case 'ArrowRight':
    case 'PageDown':
    case ' ':
      goTo(current + 1);
      break;
    case 'Home':
      goTo(0);
      break;
    case 'End':
      goTo(slides.length - 1);
      break;
    case 'f':
    case 'F':
      if (!event.repeat) void toggleFullscreen();
      break;
    default:
      return;
  }
  event.preventDefault();
});

let touchStart;
stage.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  const isControl = event.target.closest('a, button, input, label');
  touchStart = event.touches.length === 1 && !isControl ? touch : null;
}, { passive: true });

stage.addEventListener('touchend', (event) => {
  if (!touchStart) return;
  const touch = event.changedTouches[0];
  const x = touch.clientX - touchStart.clientX;
  const y = touch.clientY - touchStart.clientY;
  touchStart = null;
  if (Math.abs(x) > 64 && Math.abs(x) > Math.abs(y) * 1.5) {
    goTo(current + (x < 0 ? 1 : -1));
  }
}, { passive: true });

stage.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });

for (const articleImage of stage.querySelectorAll('.article-image img')) {
  const fallback = articleImage.parentElement.querySelector('.image-fallback');
  const showFallback = () => {
    articleImage.hidden = true;
    fallback.hidden = false;
  };
  articleImage.addEventListener('error', showFallback);
  if (articleImage.complete && articleImage.naturalWidth === 0) showFallback();
}

const triangle = document.querySelector('#triangle-canvas');
const samplePosition = document.querySelector('#sample-position');
const samplePoint = document.querySelector('#sample-point');
const sampleValue = document.querySelector('#sample-value');
const leftEdge = 0.05;
const rightEdge = 0.95;

function drawColorTriangle() {
  const context = triangle.getContext('2d');
  if (!context) return;

  const { width, height } = triangle;
  const top = height * 0.06;
  const bottom = height * 0.9;
  const midpoint = width / 2;
  const pixels = context.createImageData(width, height);

  for (let y = Math.ceil(top); y <= bottom; y += 1) {
    const blue = (bottom - y) / (bottom - top);
    const baseWeight = 1 - blue;
    const rowLeft = midpoint * blue + width * leftEdge * baseWeight;
    const rowRight = midpoint * blue + width * rightEdge * baseWeight;

    for (let x = Math.ceil(rowLeft); x <= rowRight; x += 1) {
      // Barycentric weights give each corner's contribution to the pixel.
      const green = (x - rowLeft) / (width * (rightEdge - leftEdge));
      const red = baseWeight - green;
      const offset = (y * width + x) * 4;
      pixels.data[offset] = red * 255;
      pixels.data[offset + 1] = green * 255;
      pixels.data[offset + 2] = blue * 255;
      pixels.data[offset + 3] = 255;
    }
  }

  context.putImageData(pixels, 0, 0);
}

function updateSample() {
  const green = samplePosition.valueAsNumber;
  const red = 100 - green;
  const position = leftEdge + (rightEdge - leftEdge) * green / 100;
  samplePoint.style.left = `${position * 100}%`;
  sampleValue.value = `R ${red}%　G ${green}%　B 0%`;
  samplePosition.setAttribute('aria-valuetext', `赤 ${red}パーセント、緑 ${green}パーセント、青 0パーセント`);
}

samplePosition.addEventListener('input', updateSample);
fitStage();
readPage();
drawColorTriangle();
updateSample();
