// TODO: test module

//Importieren der Klassen aus multimedia.js
import Image from "./multimedia.js";
import {Video as Movie} from "./multimedia.js"; 

//Video und Image Objekte erstellen
let image1 = new Image(100, 100, 16);
let image2 = new Image(1200, 1080, 32);
image1.print();
image2.print();

let movie1 = new Movie(1200, 1080, 32, 50, 15);
let movie2 = new Movie (1925, 1080, 32, 20, 20);
console.log(movie1.totalFrames());
console.log(movie2.totalFrames());