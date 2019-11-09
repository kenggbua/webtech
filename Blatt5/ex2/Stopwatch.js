class Stopwatch {
    constructor(element)
    {
        this.element = element;
        this.interval = "";
        this.timeStart = 0;
        this.elapsedTime= 0;
        this.adjust = 0;
        this.timeRun = 0;
    }

    reset() {
        clearInterval(this.interval);
        this.timeStart = 0;
        this.elapsedTime = 0;
        this.update();
    }

    start() {
        if(this.timeStart === 0){
            this.interval = setInterval(this.update.bind(this), 0)
            this.timeStart = new Date().getTime();
        }

    }
    stop() {
        if(this.timeStart !== 0){
            clearInterval(this.interval);
            this.elapsedTime += new Date().getTime() - this.timeStart;
            this.timeStart = 0;
        }
    }

    plusTime(ms) {
        this.adjust += ms;
        this.update();
    }

    update() {

        let current = new Date().getTime();
        if(this.timeStart === 0){
            this.timeRun = this.elapsedTime + this.adjust;
        }else this.timeRun = current - this.timeStart + this.elapsedTime + this.adjust;

        if(this.timeRun < 0){
            if(this.timeStart !== 0){
                this.timeStart = current;
            }
            this.elapsedTime = 0;
            this.timeRun = 0;
            this.adjust = 0;
        }

        let tmp = new Date(this.timeRun);
        let mm = tmp.getUTCMinutes();
        let ss = tmp.getUTCSeconds();
        let mis = tmp.getUTCMilliseconds();
        this.element.innerHTML = (mm > 9 ? mm : "0" + mm) + ":" +
            (ss > 9 ? ss : "0" + ss) + ":" +
            (mis > 99 ? mis : mis > 9 ? "0" + mis : "00" + mis);
    }
}
