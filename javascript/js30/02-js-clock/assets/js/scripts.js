function Clock() {
    this.timeInt        = 60;
    this.now            = new Date();
    this.curHour        = this.now.getHours();
    this.curMinutes     = this.now.getMinutes();
    this.curSeconds     = this.now.getSeconds() === 0 ? 60 : this.now.getSeconds();
    this.rotationDeg    = 360 / this.timeInt;
    this.handHour       = document.querySelector('.hand-hour');
    this.handMinutes    = document.querySelector('.hand-minutes');
    this.handSeconds    = document.querySelector('.hand-seconds');
    this.secCountRotation   = 0;
    this.minCountRotation   = 0;

    this.init();
}

Clock.prototype.init = function() {
    this.setHours(this.curHour);
    this.setMinutes(this.curMinutes);
    this.setSeconds(this.curSeconds);
};

Clock.prototype.update = function() {
    var now             = new Date(),
        updateHours     = now.getHours(),
        updateMinutes   = now.getMinutes(),
        updateSeconds   = now.getSeconds();

    if(updateSeconds === 0) {
        this.secCountRotation++;
        if(updateMinutes === 0) {
            this.minCountRotation++;
            this.setHours(updateHours);
        }
        this.setMinutes(updateMinutes);
    }
    this.setSeconds(updateSeconds);
};

Clock.prototype.setHours = function(hours) {
    var hoursDeg = this.rotationDeg * 5;
    this.handHour.style.transform = 'rotate(' + parseInt(hours * hoursDeg) + 'deg)';
};

Clock.prototype.setMinutes = function(min) {
    var count = this.minCountRotation ? this.minCountRotation * 360 : 0;
    this.handMinutes.style.transform = 'rotate(' + parseInt(count + (min  * this.rotationDeg)) + 'deg)';
};

Clock.prototype.setSeconds = function(sec) {
    var count = this.secCountRotation ? this.secCountRotation * 360 : 0;
    this.handSeconds.style.transform = 'rotate(' + parseInt(count + (sec * this.rotationDeg)) + 'deg)';
};

var myClock = new Clock();

setInterval(function() {
    myClock.update()
}, 1000);
