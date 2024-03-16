gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("GK-intro");
const context = canvas.getContext("2d");
const frameCount = 115;
const images = [];

// Preload images
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = `./result3/male${(i + 1).toString().padStart(4, '0')}.webp`;
  images.push(img);
}

const animation = gsap.to({}, {
  duration: frameCount - 1,
  scrollTrigger: {
    trigger: canvas,
    start: "top top",
    end: "+=" + (canvas.offsetHeight * 1.3),
    scrub: 1,
    onUpdate: render
  }
});

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[Math.round(animation.progress() * (frameCount - 1))], 0, 0);
}

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
    trigger: ".section-2",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    pin: true,
    start: "top top",
    end: "+=" + window.innerHeight * 1.3,
    scrub: 1,
  }
})
gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar",
    start: "top top",
    end: "bottom top",
    scrub: 0,
  }
})
  .to('#GK-intro', { opacity: 0 })
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
  .to('.button-round', { color: '#171010', backgroundColor: '#fff', border: '1px solid #fff' 
})
window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});
