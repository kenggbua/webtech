function moving(e) {
    let me = document.querySelector(".dragging")
    me.style.top = e.clientY-5;
    me.style.left = e.clientX-5;
}

let counter = 0;
let placed = 0;
function stopmoving(e) {

    let x = e.clientX, y = e.clientY,
        elementMouseIsOver = document.elementsFromPoint(x, y);
    this.classList.remove("dragging");
    window.removeEventListener("mousemove", moving);
    this.addEventListener("click", dragstart)

    if(elementMouseIsOver[1].tagName === "DIV"){
        placed++;
        elementMouseIsOver[1].appendChild(this)
    }else elementMouseIsOver[1].appendChild(this)


   if(checkIfWon() === 4){
       alert("you have won")
   }else if(checkPiecesPlaced() === 5){
       alert("some pieces are wrong")
   }



}

function checkPiecesPlaced() {
    for (let cd of document.getElementsByClassName("puzzlePic")){
        if(cd.hasChildNodes()){
            placed++
        }
    }

    if(placed === 5){
        return placed
    }else placed = 0;

}

function checkIfWon() {
    for (let cd of document.getElementsByClassName("puzzlePic")){
        let tmp = cd.firstChild
        if(cd.hasChildNodes() && cd.getAttribute("data-result") === tmp.getAttribute("src")){
            counter++;
        }
    }
    if(counter === 4){
        return counter;
    }else counter = 0;

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



