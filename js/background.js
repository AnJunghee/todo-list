const images = ["01.jpg", "02.jpg", "03.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${randomImage}) no-repeat center`;
document.body.style.backgroundSize = 'cover';

// const bgImage = document.createElement("img");
// bgImage.classList.add("bgImg");
// bgImage.src = `img/${randomImage}`;
// document.body.appendChild(bgImage);