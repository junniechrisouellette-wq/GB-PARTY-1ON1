// ==============================
// NEON EVENT - script.js
// ==============================

// Floating Hero Animation
const heroImage = document.querySelector(".hero-image img");

if(heroImage){

    let y = 0;

    setInterval(()=>{

        y += 0.05;

        heroImage.style.transform =
        `translateY(${Math.sin(y)*10}px)`;

    },20);

}

// ==============================
// Floating Particles
// ==============================

const phone = document.querySelector(".phone");

for(let i=0;i<35;i++){

    const p=document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*390+"px";

    p.style.top=Math.random()*900+"px";

    const size=Math.random()*5+2;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.animationDuration=
    (6+Math.random()*8)+"s";

    p.style.animationDelay=
    Math.random()*5+"s";

    phone.appendChild(p);

}

// ==============================
// Animated Glow Buttons
// ==============================

const buttons=document.querySelectorAll(".btn,.btn2");

let hue=0;

setInterval(()=>{

    hue++;

    buttons.forEach(btn=>{

        btn.style.boxShadow=
        `0 0 20px hsl(${hue},100%,60%),
         0 0 40px hsl(${hue+30},100%,60%)`;

    });

    if(hue>360){

        hue=0;

    }

},60);

// ==============================
// Fade In Cards
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});

// ==============================
// Gallery Hover
// ==============================

document.querySelectorAll(".photos img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ==============================
// Smooth Button Press
// ==============================

buttons.forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.96)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="scale(1)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

console.log("Neon Event Loaded");