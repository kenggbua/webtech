function moving(e) {
    let me = document.querySelector(".dragging")
    me.style.top = e.clientY-5;
    me.style.left = e.clientX-5;
}

function stopmoving(e) {
    this.classList.remove("dragging");
    window.removeEventListener("mousemove", moving);
    this.addEventListener("click", dragstart)
}

function dragstart(e) {
    this.classList.add("dragging");
    this.removeEventListener("click", dragstart)
    this.addEventListener("click", stopmoving)
    window.addEventListener("mousemove", moving)
}

for (let cd of document.getElementById("puzzleSource").childNodes){
    cd.addEventListener("click", dragstart)
}