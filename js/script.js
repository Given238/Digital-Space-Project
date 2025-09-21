const button = document.querySelector("button");
const globeCircle = document.querySelector(".globe-circle");


    // On hover, change fill to Indonesian flag
    button.addEventListener("mouseenter", () => {
      globeCircle.style.fill = "url(#indo-flag)";
    });

    // Reset when hover ends
    button.addEventListener("mouseleave", () => {
      globeCircle.style.fill  = 'lightBlue'
    });

const maskRect = document.getElementById("mask-rect");

    button.addEventListener("mouseenter", () => {maskRect.style.animation = "slide-down 1s forwards";})

    button.addEventListener("mouseleave", () => {maskRect.style.animation = "slide-up 1s forwards"})

