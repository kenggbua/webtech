let tmp = document.querySelector("div");


let hOnes = document.querySelectorAll("h1");


tmp.innerHTML += '<form id="form" style="margin-top: 80px" method="post">' +
    '<fieldset>' +
    '<label for="selectSection">Select Section</label><br>' +
    '<select id="selectSection" required><option>Select a heading</option>' +
    '</select><br>' +
    '<label for="heading">Heading   </label>' +
    '<input type="text" id="heading" name="heading"><br>' +
    '<label for="text">Text   </label>' +
    '<textarea id="text" style="margin: 0px; width: 737px; height: 162px;"></textarea><br>' +
    '<input type="submit" id="push" disabled>' +
    '</fieldset>' +
    '</form>';


document.getElementById("selectSection").addEventListener("change", insert);
document.getElementById("form").addEventListener("submit", update);
for (let i = 1; i < hOnes.length; i++) {
    document.getElementById("selectSection").options[document.getElementById("selectSection").options.length] = new Option(hOnes[i].innerHTML)
}

function update(event) {
    event.preventDefault();
    if (!(document.getElementById("text").value.includes("<h1>"))) {
        document.getElementsByTagName("h1")[document.getElementById("selectSection").selectedIndex].parentElement.innerHTML = '<h1></h1>' + document.getElementById("text").value;
    } else document.getElementsByTagName("h1")[document.getElementById("selectSection").selectedIndex].parentElement.innerHTML = document.getElementById("text").value;
    document.getElementsByTagName("h1")[document.getElementById("selectSection").selectedIndex].innerHTML = document.getElementById("heading").value;
    document.getElementById("text").value = document.getElementsByTagName("h1")[document.getElementById("selectSection").selectedIndex].parentElement.innerHTML;
    document.getElementById("selectSection").options[document.getElementById("selectSection").selectedIndex] = new Option(document.getElementById("heading").value)


}

function insert() {
    let x = document.getElementsByTagName("h1")[document.getElementById("selectSection").selectedIndex].parentElement.innerHTML;
    document.getElementById("heading").value = document.getElementById("selectSection").options[document.getElementById("selectSection").selectedIndex].text;
    document.getElementById("text").value = x;
    document.getElementById("push").disabled = false;

}










