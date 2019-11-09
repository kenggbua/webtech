// TODO: create ES2015 module exports
export default class Image {

	constructor(width, height, bitdepth) {
		this.width = width;
		this.height = height;
		this.bitdepth = bitdepth;
		this.rawsize = width * height * bitdepth / (8 * 1024 * 1024);
		this.megapixels = width * height / (1000000);
	}

	print() {
		var keys = Object.getOwnPropertyNames(this);
		for (var i=0; i < keys.length; i++) {
			if (typeof this[keys[i]] !== "function") {
				console.log(keys[i] + "=" + this[keys[i]] + ", ");
			}
		}
	}
}

export class Video extends Image {

	constructor(width, height, bitdepth, duration, framerate) {
		super(width, height, bitdepth);
		this.duration = duration;
		this.framerate = framerate;
	}

	totalFrames() {
		return this.duration * this.framerate;
	}

}

/*
Exportieren geht auch so:
export default class {Image};
export class {Video, Image};
*/
