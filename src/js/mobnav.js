
let background = document.getElementById("background");
let particles = document.getElementsByClassName("particles")[0];
let root = document.getElementsByTagName('html')[0];
let ul = document.getElementsByTagName('ul')[1];
let input = document.getElementById("active");


let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(i => {
    i.addEventListener("click", function() {
        input.checked = false;
        validate(input);
    })
});

//**  MAKE MOBILE NAV KEYBOARD ACCESSIBLE !!! 

// input.addEventListener(KeyboardEvent, event => {
//     if(event.key === "Enter") return; // Use `.key` instead.
//     input.setAttribute("checked"); // Things you want to do.
//     // event.preventDefault(); // No need to `return false;`.
//     validate(event);
// });

let validate = (input) => {
    // console.log("validate fn fired!");
    if(input.checked) {
        ul.style.backgroundColor = "rgba(255, 248, 231, 0.2)";
        root.style.overflowY = " hidden";
        background.style.display = "block";
        particles.style.zIndex = "55";
        // linksUl.style.display = "block";
        document.body.style.overflowY = "hidden";
        Particles.init({
            // normal options
            selector: '#background',
            maxParticles: 200,
            connectParticles: true,
            color: ["#00eeff", "#ff9c0e", "#ff0e71", "#52489c"],
            // options for breakpoints
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        maxParticles: 100,
                        color: ["#00eeff", "#ff9c0e", "#ff0e71", "#52489c"],
                        connectParticles: true
                    }
                }, {
                    breakpoint: 425,
                    options: {
                        maxParticles: 80,
                        connectParticles: true
                    }
                }, {
                    breakpoint: 320,
                    options: {
                        maxParticles: 40 // setting to 0 disables particles.js
                    }
                }
            ] 
        });
    }else{
        root.style.overflowY = " scroll";
        document.body.style.overflowY = "scroll";
        background.style.display = "none";
        particles.style.zIndex = "-1";
        ul.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }            
}