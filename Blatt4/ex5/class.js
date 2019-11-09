class Image {
    constructor(width, height, bitdepth) {
        this.width = width;
        this.height = height;
        this.bitdepth = bitdepth;
    }

    computeSize() {
        let rawsize = (this.width * this.height * Math.pow(2, this.bitdepth)) / (1024 * 1024);
        let megapixels = this.width * this.height / 1000000;
        return "Rawsize: " + rawsize + " MiB" + "\n" +
            "Megapixel: " + megapixels + " MP"
    }

    print() {
        console.log("Width = " + this.width + "\n" +
            "Height = " + this.height + "\n" +
            "Bitdepth = " + this.bitdepth + "\n"+
            "computeSize = " + this.computeSize())
    }
}

class Video extends Image {
    constructor(framerate, duration, width, height, bitdepth) {
        super(width, height, bitdepth)
        this.framerate = framerate;
        this.duration = duration;
    }

    totalFrames(framerate, duration) {
        return this.framerate * this.duration;
    }
}

let image1 = new Image(100,100,32);
image1.print();

let video1 = new Video(30,60,100,100,32);
video1.print();
console.log("Totalframes of video1 = " +video1.totalFrames());

let video2 = new Video(30,120,100,100,32);
video2.print();
console.log("Totalframes of video2 = " + video2.totalFrames());