let link = document.getElementsByTagName("a")[1];
console.log(link.attributes["href"].nodeValue); //get attribute of href from link
console.log(link.getAttributeNode("href").nodeValue);//get attribute of href from link
console.log(link.href);//get attribute of href from link
console.log(link.firstChild); //depends on the formatting
console.log(link.attributes[0].nodeType); // get first attribute and its type
console.log(link.firstChild.nodeType); // (depends on the formatting) now type 3 (text)
console.log(link.parentNode.nodeName); //body
console.log(link.lastChild.parentNode.nodeName); // a (gets his own nodename)
console.log(link.attributes.length); // # of attributes