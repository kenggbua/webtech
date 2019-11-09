class Stopwatch2 {
    constructor(element) {
        this.element = element;
        this.interval = "";
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.stopped = false;


    }

    reset() {
        this.element.innerHTML = "00:00:000";
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        clearInterval(this.interval);
        this.interval = "";
    }

    start() {

        if (this.timeBegan === null) {
            this.timeBegan = new Date();
        }
        if (this.timeStopped !== null && this.stopped ) {
            this.stoppedDuration += (new Date() - this.timeStopped);
            this.stopped = false;
        }
        if (this.interval === "") {
            this.interval = setInterval(this.update.bind(this), 0);
        }

    }

    plusTime(ms) {



        this.timeBegan.setUTCSeconds(this.timeBegan.getUTCSeconds()  - ms/1000);

        this.updateTime();


    }

    updateTime() {

        let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timeBegan - (new Date() - this.timeStopped + this.stoppedDuration))
            , mm = timeElapsed.getUTCMinutes()
            , ss = timeElapsed.getUTCSeconds()
            , mis = timeElapsed.getUTCMilliseconds();


        this.element.innerHTML = (mm > 9 ? mm : "0" + mm) + ":" +
            (ss > 9 ? ss : "0" + ss) + ":" +
            (mis > 99 ? mis : mis > 9 ? "0" + mis : "00" + mis);
    }

    minusTime(ms) {

        let time = this.element.innerHTML.split(":");
        let mm = time[0];
        let ss = time[1];
        console.log(this.interval.active)
        console.log(parseInt(ss,10) - 5)
        console.log(mm === "00")
        if (parseInt(ss,10) - 5 < 0 && mm === "00") {
            if(this.interval === ""){
                this.reset();
            }else {
                this.timeBegan = new Date();
            }
        } else  {
            this.timeBegan.setUTCSeconds(this.timeBegan.getUTCSeconds() + ms/1000);
        }

        this.updateTime();


    }


    stop() {
        clearInterval(this.interval);
        this.timeStopped = new Date();
        this.stopped = true;
        this.interval = "";

    }


    update() {


        let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
            , mm = timeElapsed.getUTCMinutes()
            , ss = timeElapsed.getUTCSeconds()
            , mis = timeElapsed.getUTCMilliseconds();



        this.element.innerHTML = (mm > 9 ? mm : "0" + mm) + ":" +
            (ss > 9 ? ss : "0" + ss) + ":" +
            (mis > 99 ? mis : mis > 9 ? "0" + mis : "00" + mis);
    }

}
