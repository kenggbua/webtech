function incrementClickCount(){
    let clickCount = 0;

    return () => {
        return ++clickCount;
    }
}
const z = incrementClickCount();


document.getElementById("myBtn").addEventListener("click", function() {


    alert(z());
});