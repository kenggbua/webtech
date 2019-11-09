class Stopwatch2 {
    constructor(element)
    {
        this.element = element;
        this.interval = "";
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;


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
        }else {
            clearInterval(this.interval);
            this.interval = "";
        }



        if (this.timeStopped !== null) {
            this.stoppedDuration += (new Date() - this.timeStopped);
        }

        if(this.interval === "") {
            this.interval = setInterval(this.update.bind(this), 10);
        }

    }

    plusTime(ms) {



        this.timeBegan.setUTCSeconds(this.timeBegan.getUTCSeconds() - ms/1000);



    }

    minusTime(ms) {
        let time = this.element.innerHTML.split(":");
        let ss = time[1];
        if(ss - 5 <= 0){
            this.timeBegan = new Date();
        }else this.timeBegan.setUTCSeconds(this.timeBegan.getUTCSeconds() + ms/1000)


    }


    stop() {
        clearInterval(this.interval);
        this.interval = "";

    }


    update() {
        let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
            , mm = timeElapsed.getUTCMinutes()
            , ss = timeElapsed.getUTCSeconds()
            , mis = timeElapsed.getUTCMilliseconds();



        if(mis >= "999"){
            ss++;
            mis = "000";
        }
        if(ss >= "60"){
            mm++;
            ss = "00";
        }

        if(mm >= "60"){
            this.stop();
        }


        this.element.innerHTML =  (mm > 9 ? mm : "0" + mm) + ":" +
            (ss > 9 ? ss : "0" + ss) + "." +
            (mis > 9 ? mis : mis > 99 ? "00" + mis : "0" + mis);
    }

}
