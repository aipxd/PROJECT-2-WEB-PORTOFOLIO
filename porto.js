// Navigation Active Link
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  }
  );
}
);


// Typewriter Effect
const firstText = "Hi, It's ";
const nameText = "Adibta";
let index1 = 0;
let index2 = 0;

const typeEl = document.getElementById("typewriter");
const nameEl = document.getElementById("name");

function typeFirst() {
  if (index1 < firstText.length) {
    typeEl.textContent += firstText[index1];
    index1++;
    setTimeout(typeFirst, 90);
  } 
  else {
    typeEl.classList.remove("cursor");
    typeName();
  }
}

function typeName() {
  if (index2 < nameText.length) {
    nameEl.textContent += nameText[index2];
    index2++;
    setTimeout(typeName, 90);
  }
}

typeFirst();


//Fade In Effect
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkFadeIn);
checkFadeIn(); 


//Cursor Effect
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".hero::before");
});
