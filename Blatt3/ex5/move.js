


for (let cd of document.getElementById("puzzleSource").childNodes){
    cd.addEventListener("click", dragstart)
}


function moving(e) {
    let me = document.querySelector(".dragging")
    me.style.top = e.clientY-5;
    me.style.left = e.clientX-5;
}
let placed = 0;

function stopmoving(e) {

    let x = e.clientX, y = e.clientY, elementMouseIsOver = document.elementsFromPoint(x, y);
    this.classList.remove("dragging");
    window.removeEventListener("mousemove", moving);
    this.addEventListener("click", dragstart);
    this.addEventListener("click", stopmoving)


    if(elementMouseIsOver[1].tagName === "DIV"){
        elementMouseIsOver[1].appendChild(this)
    }else {
        document.getElementById("puzzleSource").appendChild(this)
    }


   if(checkIfWon() === 4){
       setTimeout(function () {
           alert("you have won")
       }, 100)

   }else if(checkPiecesPlaced(e) === 4){
      setTimeout(function () {
          alert("you lost")
      }, 100)
   }



}



function dragstart(e) {
    this.classList.add("dragging");
    this.removeEventListener("click", dragstart)
    this.addEventListener("click", stopmoving)
    window.addEventListener("mousemove", moving)
}





function checkPiecesPlaced() {

    for (let cd of document.getElementsByClassName("puzzlePic")){
        if(cd.hasChildNodes()){
            placed++
        }
    }
    console.log(placed);
    if(placed === 4){
        return placed;
    }else placed = 0;


}

function checkIfWon() {
    let counter = 0;

    for (let cd of document.getElementsByClassName("puzzlePic")){
        let tmp = cd.firstChild
        if(cd.hasChildNodes() && cd.getAttribute("data-result") === tmp.getAttribute("src")){
            counter++;
        }
    }
    return counter;

}
