gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("GK-intro");
const context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
const frameCount = 115;

const images = [];

// Asynchronously load images
function loadImages() {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = render;
    img.src = `./result3/male${(i + 1).toString().padStart(4, '0')}.webp`;
    images.push(img);
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[sinxsin.frame], 0, 0);
}

gsap.to(sinxsin, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 1
  },
  onUpdate: render
});

// Load images asynchronously
loadImages();

// Additional ScrollTrigger animations
const sections = document.querySelectorAll(".section");
sections.forEach(section => {
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: `+=${window.innerHeight * 1.3}`,
      scrub: 1
    }
  });
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar",
    start: "top top",
    end: "bottom top",
    scrub: 0,
  }
})
.to('#GK-intro', { opacity: 0 });

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap",
    pin: false,
    start: "top bottom",
    end: "bottom bottom ",
    scrub: 1,
  }
})
.to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
.to('header', { color: '#fff' })
.to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' });

// Remove loading class after resources have loaded
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('before-load');
});

// Remove loading element after transition
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});
