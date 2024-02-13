const no = document.getElementById("no");
const quest = document.getElementById("q");
const greet = document.getElementById("g");
const yes = document.getElementById("yes");
const img = document.getElementById("img");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

no.addEventListener("mouseover", () => {
    img.src = "./images/cat_lose.gif"
    img.style = "height: 250px;"
    no.style = `left: ${getRandomArbitrary(1,9) * 10}%;
                top: ${getRandomArbitrary(3,9) * 10}%`;
})

no.addEventListener("click", () => {
    img.src = "./images/cat_lose.gif"
    
    img.style = "height: 250px; position: relative; left: 8%; top: 10%"
    no.style = `left: ${getRandomArbitrary(1,9) * 10}%;
                top: ${getRandomArbitrary(3,9) * 10}%`;
})

yes.addEventListener("click", ()=>{
    img.src = "./images/cat_love.gif";
    img.style = "transform: scale(1.7); position: relative; top: 10%; left: 4.5%";
    img.classList.toggle("love");
    quest.classList.toggle("not")
    greet.classList.toggle("not")
    no.classList.toggle("not");
    yes.classList.toggle("not");
})
