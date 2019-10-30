function incrementClickCount(){
    let clickCount = 0;

    return () => {
        return ++clickCount;
    }
}
let z = incrementClickCount();


document.getElementById("myBtn").addEventListener("click", function() {


    alert(z());
});