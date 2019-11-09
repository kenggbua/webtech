/*
class Stopwatch {
    constructor(element)
    {
        this.element = element;
        this.interval = "";
    }

    reset() {
        this.element.innerHTML = "00:00:000";
        this.stop();
    }

    start() {

        if(this.interval === ""){
            this.interval = setInterval(this.update.bind(this),0);
        }

    }

    plusTime(ms) {

        let time = this.element.innerHTML.split(":");
        let mm = time[0];
        let ss = time[1];
        let mis = time[2];
       ss = parseInt(ss,10) + ms/1000;

        this.element.innerHTML = mm + ":" + ss + ":" + mis;

    }

    minusTime(ms) {
        let time = this.element.innerHTML.split(":");
        let mm = time[0];
        let ss = time[1];
        let mis = time[2];
        if(parseInt(ss,10) - 5 <= 0 && mm === 0){
            ss = "00";
            mis = "000";
        }

        this.element.innerHTML = mm + ":" + ss + ":" + mis;
    }

    stop() {
    this.interval = clearInterval(this.interval);
    this.interval = "";

    }

    update() {
        let time = this.element.innerHTML.split(":");
        let mm = time[0];
        let ss = time[1];
        let mis = time[2];

        mis++;



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


        this.element.innerHTML = mm + ":" + ss + ":" + mis;
    }

}
*/
