const container = document.getElementById("container");
// create 5 divs
for (let i = 0; i < 25; i++) {
    container.appendChild(document.createElement('div'));
}

// select only divs inside container
const logos = document.querySelectorAll('#container div');

for (let i = 0; i < logos.length; i++) {
    logos[i].style.setProperty('--i', i);
    logos[i].style.setProperty('--d', Math.random() * 8);
    logos[i].style.setProperty('--a', Math.random()* 8 + 4);
    logos[i].style.setProperty('--hue', Math.floor(Math.random()* 360));
    logos[i].style.setProperty('--y', Math.floor(Math.random()* 100));

}
