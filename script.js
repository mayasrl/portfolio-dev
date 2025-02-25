const button = document.getElementById('scroll');

let isScrolling = false;
let animationFrameId;

function scrollContinuously() {
  if (isScrolling) {
    window.scrollBy(0, 5);
    animationFrameId = requestAnimationFrame(scrollContinuously);
  }
}

function startScrolling(e) {
  e.preventDefault();
  if (!isScrolling) {
    isScrolling = true;
    scrollContinuously();
  }
}

function stopScrolling() {
  isScrolling = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Inicia o scroll quando o usuário pressiona o botão
button.addEventListener('pointerdown', startScrolling);

// Interrompe o scroll quando o usuário solta o botão, mesmo fora dele
document.addEventListener('pointerup', stopScrolling);
document.addEventListener('pointercancel', stopScrolling);
