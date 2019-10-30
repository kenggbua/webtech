//let images = {width:1920,height:1080,bitdepth:8, computerSize:function () {
  //      let rawsize = (this.width * this.height*Math.pow(2,this.bitdepth))/1024/1024;
    //    let megapixels = this.width * this.height/1000000;

    // return rawsize + "MiB " + megapixels + "MP";

  //  }};

function image(width, height, bitdepth) {
    this.width = width;
    this.height = height;
    this.bitdepth = bitdepth;
    this.rawsize = (this.width * this.height*Math.pow(2,this.bitdepth))/1024/1024;
    this.megapixel = this.width * this.height/1000000;
    this.print = function() {
        for (let x in this){
            console.log(x + " " + this[x]);
        }}
}

image.prototype.printmore = function ()  {
    this.print()
    console.log("Ratio: " + this.width/this.height);
}

let x = new image(10,10,10);
//x.printmore();

function video(width, height, bitdepth, duration, framerate) {

    image.call(this, width, height, bitdepth);
    this.duration = duration;
    this.framerate = framerate;
    this.totalframe = function () {
        return "Totalframes: " + duration*framerate;
    }
}
video.prototype = Object.create(image.prototype);


let hugo = new video(12,13,16,20,30)


hugo.printmore()
